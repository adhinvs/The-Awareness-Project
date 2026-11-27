import fs from 'node:fs';
import path from 'node:path';

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : /\.mdx?$/.test(file) ? [file] : [];
  });
}

function clean(text) {
  return text
    .replace(/<figure[\s\S]*?<\/figure>/g, ' ')
    .replace(/<iframe[\s\S]*?\/>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/[`*_#>\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function entry(file, docsDir) {
  const source = fs.readFileSync(file, 'utf8');
  const frontmatter = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  const metadata = frontmatter?.[1] || '';
  const value = key => metadata.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'))?.[1]?.replace(/^['"]|['"]$/g, '') || '';
  const tags = (value('tags').match(/^\[(.*)\]$/)?.[1] || '')
    .split(',').map(tag => tag.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
  const body = source.slice(frontmatter?.[0].length || 0);
  const relative = path.relative(docsDir, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
  const route = relative.endsWith('/index') ? relative.slice(0, -6) : relative;
  return {
    title: value('title') || body.match(/^#\s+(.+)$/m)?.[1] || route,
    description: value('description'),
    tags,
    body: clean(body),
    url: `/docs/${route}`,
  };
}

export default function awarenessSearch(context) {
  const docsDir = path.join(context.siteDir, 'docs');
  return {
    name: 'awareness-search',
    getPathsToWatch() {
      return [path.join(docsDir, '**/*.{md,mdx}')];
    },
    async loadContent() {
      return walk(docsDir).map(file => entry(file, docsDir));
    },
    async contentLoaded({content, actions}) {
      await actions.createData('search-index.json', JSON.stringify(content));
    },
  };
}
