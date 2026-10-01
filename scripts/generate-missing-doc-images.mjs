import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const docsDir = path.join(root, 'docs');
const imgDir = path.join(root, 'static', 'img');
const imagePattern = /!\[|<img|src=["']\/img/;
const refreshImages = process.argv.includes('--refresh-images');

const palettes = [
  ['#0f172a', '#2563eb', '#22d3ee', '#f8fafc'],
  ['#111827', '#7c3aed', '#f472b6', '#f9fafb'],
  ['#102a43', '#0ea5e9', '#14b8a6', '#f8fafc'],
  ['#1f2937', '#ef4444', '#f59e0b', '#fff7ed'],
  ['#172554', '#16a34a', '#84cc16', '#f7fee7'],
  ['#312e81', '#4f46e5', '#06b6d4', '#eef2ff'],
];

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function slugToTitle(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function wrapText(text, maxChars, maxLines) {
  const words = text.replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';
  let truncated = false;

  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
      if (lines.length === maxLines - 1 && i < words.length - 1) {
        truncated = true;
        break;
      }
    } else {
      line = next;
    }
  }

  if (line && lines.length < maxLines) lines.push(line);
  if (truncated && lines.length > 0) {
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[.,;:!?-]+$/, '')}...`;
  }
  return lines;
}

function frontmatterValue(source, key) {
  const match = source.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return match?.[1]?.replace(/^["']|["']$/g, '').trim();
}

function firstParagraph(source) {
  const body = source.replace(/^---[\s\S]*?---\s*/, '').replace(/^import .+\n/gm, '');
  const paragraphs = body
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter((block) => block && !block.startsWith('#') && !block.startsWith('<') && !block.startsWith('---'));
  return paragraphs[0]?.replace(/[*_`]/g, '') ?? '';
}

function makeAlt(title, description) {
  const base = description || `Conceptual illustration for ${title}.`;
  return base.replace(/"/g, "'").slice(0, 180);
}

function sectionLabel(relPath) {
  const parts = relPath.split(path.sep);
  return parts.length > 1 ? slugToTitle(parts[0]) : 'The Awareness Project';
}

function destinationFor(relPath) {
  const parsed = path.parse(relPath);
  const parts = parsed.dir ? parsed.dir.split(path.sep) : [];
  const slug = parsed.name;

  if (slug === 'intro') {
    return {
      assetDir: path.join(imgDir, 'intro'),
      publicPath: '/img/intro/intro-hero.webp',
    };
  }

  if (slug === 'index' && parts.length > 0) {
    return {
      assetDir: path.join(imgDir, ...parts, 'section'),
      publicPath: `/img/${[...parts, 'section', 'section-hero-generated.webp'].join('/')}`,
    };
  }

  return {
    assetDir: path.join(imgDir, ...parts, slug),
    publicPath: `/img/${[...parts, slug, `${slug}-hero.webp`].join('/')}`,
  };
}

function iconFor(title) {
  const lower = title.toLowerCase();
  if (lower.includes('phishing') || lower.includes('communication')) return ['M170 185h260v150H170z', 'M170 185l130 95 130-95'];
  if (lower.includes('payment') || lower.includes('money') || lower.includes('bank')) return ['M165 210h270v130H165z', 'M205 250h90', 'M205 285h160'];
  if (lower.includes('identity') || lower.includes('account')) return ['M300 165a58 58 0 110 116a58 58 0 010-116z', 'M190 365c18-72 202-72 220 0'];
  if (lower.includes('device') || lower.includes('network') || lower.includes('app')) return ['M205 155h190v260H205z', 'M255 380h90'];
  if (lower.includes('country') || lower.includes('europe') || lower.includes('india') || lower.includes('united')) return ['M300 160a115 115 0 110 230a115 115 0 010-230z', 'M185 275h230', 'M300 160c45 52 45 178 0 230'];
  if (lower.includes('ai') || lower.includes('algorithm')) return ['M210 210h180v150H210z', 'M250 170v40', 'M350 170v40', 'M250 360v40', 'M350 360v40'];
  return ['M300 155l135 78v134l-135 78-135-78V233z', 'M300 210v180', 'M225 255l75 45 75-45'];
}

function svgFor({ title, description, relPath, index }) {
  const [bg, primary, accent, fg] = palettes[index % palettes.length];
  const subtitle = description || firstParagraph(description) || 'A practical awareness guide for spotting risk before it becomes harm.';
  const titleLines = wrapText(title, 26, 3);
  const subtitleLines = wrapText(subtitle, 54, 3);
  const label = sectionLabel(relPath).toUpperCase();
  const shapes = iconFor(title)
    .map((d) => `<path d="${d}" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>`)
    .join('');

  return `
<svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${bg}"/>
      <stop offset="0.55" stop-color="${primary}"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
    <radialGradient id="wash" cx="75%" cy="24%" r="70%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="28" stdDeviation="28" flood-color="#000000" flood-opacity="0.28"/>
    </filter>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#wash)"/>
  <path d="M-120 760 C 260 610 460 790 820 640 S 1320 500 1740 650 L1740 940 L-120 940 Z" fill="#ffffff" opacity="0.10"/>
  <g opacity="0.16">
    <circle cx="1220" cy="190" r="240" fill="#ffffff"/>
    <circle cx="1350" cy="640" r="150" fill="#000000"/>
    <circle cx="180" cy="170" r="120" fill="#ffffff"/>
  </g>
  <g transform="translate(910 200)" filter="url(#shadow)">
    <rect width="500" height="500" rx="38" fill="#0b1220" opacity="0.34"/>
    <rect x="34" y="34" width="432" height="432" rx="30" fill="#ffffff" opacity="0.10"/>
    <g transform="translate(0 0)">${shapes}</g>
  </g>
  <g transform="translate(150 150)">
    <text x="0" y="0" fill="${fg}" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" letter-spacing="4" opacity="0.86">${escapeXml(label)}</text>
    ${titleLines.map((line, i) => `<text x="0" y="${100 + i * 88}" fill="${fg}" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="900">${escapeXml(line)}</text>`).join('')}
    <rect x="0" y="${130 + titleLines.length * 88}" width="92" height="8" rx="4" fill="${accent}"/>
    ${subtitleLines.map((line, i) => `<text x="0" y="${210 + titleLines.length * 88 + i * 42}" fill="${fg}" font-family="Inter, Arial, sans-serif" font-size="33" font-weight="500" opacity="0.9">${escapeXml(line)}</text>`).join('')}
  </g>
</svg>`;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full;
  }));
  return files.flat();
}

function imageBlock(publicPath, alt) {
  return `<figure style={{ margin: '32px 0', textAlign: 'center' }}>
  <img
    src="${publicPath}"
    alt="${alt}"
  />
</figure>`;
}

function insertImage(source, block) {
  const heading = source.match(/^# .+$/m);
  if (!heading?.index) return `${source.trim()}\n\n${block}\n`;

  const afterHeading = heading.index + heading[0].length;
  const rest = source.slice(afterHeading);
  const paragraphMatch = rest.match(/\n\n([\s\S]*?)(\n\n---|\n\n## )/);

  if (paragraphMatch?.index === 0) {
    const insertAt = afterHeading + paragraphMatch[0].length - paragraphMatch[2].length;
    return `${source.slice(0, insertAt)}\n\n${block}${source.slice(insertAt)}`;
  }

  return `${source.slice(0, afterHeading)}\n\n${block}${source.slice(afterHeading)}`;
}

const docs = (await walk(docsDir)).filter((file) => file.endsWith('.mdx'));
const updated = [];

for (const file of docs) {
  const source = await fs.readFile(file, 'utf8');
  const relPath = path.relative(docsDir, file);
  const slug = path.parse(relPath).name;
  const title = frontmatterValue(source, 'title') || slugToTitle(slug);
  const description = frontmatterValue(source, 'description') || firstParagraph(source);
  const { assetDir, publicPath } = destinationFor(relPath);
  const filename = path.basename(publicPath);
  const assetPath = path.join(assetDir, filename);
  const hasImage = imagePattern.test(source);

  if (hasImage && (!refreshImages || !source.includes(publicPath))) continue;

  await fs.mkdir(assetDir, { recursive: true });
  const svg = svgFor({ title, description, relPath, index: updated.length });
  await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 6 }).toFile(assetPath);

  if (!hasImage) {
    const alt = makeAlt(title, description);
    const nextSource = insertImage(source, imageBlock(publicPath, alt));
    await fs.writeFile(file, nextSource);
  }

  updated.push({ file: path.relative(root, file), asset: path.relative(root, assetPath), publicPath });
}

console.log(JSON.stringify({ updated }, null, 2));
