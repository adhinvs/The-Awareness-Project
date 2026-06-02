# Contributing to The Awareness Project

Welcome, and thank you for being here.

The Awareness Project is a free, open education platform helping people recognise digital risk and manipulation. Every contribution, whether it is a new module, a simulation, a translation, or a typo fix, directly helps someone make a safer decision online.

This guide covers everything you need to know to contribute effectively.

---

## Table of Contents

1. [Understanding the Project](#1-understanding-the-project)
2. [Repository Architecture](#2-repository-architecture)
3. [Contributor Roles](#3-contributor-roles)
4. [Required Software](#4-required-software)
5. [First-Time Setup](#5-first-time-setup)
6. [Standard Collaboration Workflow](#6-standard-collaboration-workflow)
7. [Naming Conventions](#7-naming-conventions)
8. [How Simulations Work](#8-how-simulations-work)
9. [Visual and Tone Guidelines](#9-visual-and-tone-guidelines)
10. [Contribution Best Practices](#10-contribution-best-practices)
11. [Learning Path for Beginners](#11-learning-path-for-beginners)
12. [Pre-Upload Checklist](#12-pre-upload-checklist)

---

## 1. Understanding the Project

The Awareness Project is built on [Docusaurus](https://docusaurus.io/), a documentation platform that lets us write lessons in Markdown/MDX and publish them as a full website.

This repository is not just a traditional software repository. It combines:

- **Curriculum modules** - written lessons and educational content
- **Interactive simulations** - HTML-based demos embedded inside lessons
- **Visual assets** - banners, illustrations, and awareness graphics
- **Custom UI components** - React components for the homepage and learning experience

The curriculum is structured across **13 sections and 89 modules**, covering social engineering, scams, AI deception, dark patterns, surveillance, financial exploitation, and more. See the [full curriculum](Documents/TheAwarenessProject_Curriculum.txt).

---

## 2. Repository Architecture

```
The-Awareness-Project/
│
├── docs/                                        ← All lesson content (MDX files)
│   ├── who-you-are-what-you-have/
│   │   ├── _category_.json                      ← Sidebar label and link config
│   │   ├── index.mdx                            ← Section overview page
│   │   ├── your-identity-personal-information.mdx
│   │   ├── your-passwords-account-access.mdx
│   │   ├── your-money-financial-assets.mdx
│   │   └── your-location-physical-safety.mdx
│   │
│   ├── social-engineering-manipulation-tactics/
│   │   ├── _category_.json
│   │   ├── index.mdx
│   │   ├── authority-obedience.mdx
│   │   └── ...
│   │
│   └── [other-section-folders]/
│       ├── _category_.json
│       ├── index.mdx
│       └── [article-name].mdx
│
├── static/
│   ├── img/
│   │   ├── who-you-are-what-you-have/           ← Images grouped by section
│   │   │   ├── section1.webp                    ← Section-level image
│   │   │   ├── your-identity-personal-information/
│   │   │   ├── your-passwords-account-access/
│   │   │   ├── your-money-financial-assets/
│   │   │   └── your-location-physical-safety/
│   │   └── social-engineering-manipulation-tactics/
│   │       ├── section2.webp
│   │       └── authority-obedience/
│   │
│   └── simulations/
│       ├── who-you-are-what-you-have/           ← Simulations grouped by section
│       │   ├── section/                         ← Section-level simulation
│       │   ├── your-identity-personal-information/
│       │   ├── your-passwords-account-access/
│       │   ├── your-money-financial-assets/
│       │   └── your-location-physical-safety/
│       └── social-engineering-manipulation-tactics/
│           ├── section/
│           └── authority-obedience/
│
├── src/
│   ├── components/                              ← Reusable React components
│   ├── pages/                                   ← Landing page
│   ├── css/                                     ← Global styles
│   └── theme/                                   ← Docusaurus theme overrides
│
├── Documents/                                   ← Reference documents
├── README.md
├── CONTRIBUTING.md                              ← This file
├── sidebars.js                                  ← Sidebar navigation structure
├── docusaurus.config.js                         ← Site configuration
└── package.json                                 ← Project dependencies
```

### The Five Layers

| Layer | Folder | What It Is |
|---|---|---|
| 1 | `docs/` | Curriculum - lessons, modules, sections |
| 2 | `static/simulations/` | Interactive HTML simulations (first-class content) |
| 3 | `static/img/` | Visual assets - banners, icons, screenshots |
| 4 | `src/` | Frontend - React components, homepage, styling |
| 5 | `src/theme/` | Theme overrides - affects the entire site |

---

## 3. Contributor Roles

To keep the project structured and avoid conflicts, contributors should work within their role.

### Content Contributors

**Can edit:** `docs/`, `static/img/`, `static/simulations/`

**Tasks:**
- Writing and editing MDX modules
- Adding simulations and embedding iframes
- Adding educational graphics and screenshots

**Avoid editing** (unless instructed): `src/`, `src/theme/`, `docusaurus.config.js`, `sidebars.js`

---

### Design Contributors

**Can edit:** `static/img/`, `src/css/`

**Tasks:**
- Banners, illustrations, awareness graphics
- Styling improvements

---

### Technical Maintainers

**Can edit:** Everything - `src/`, `src/theme/`, config files

**Tasks:**
- Architecture and infrastructure
- React components and theme customization
- Docusaurus configuration and deployment
- Reviewing and merging pull requests

---

## 4. Required Software

### Git

Version control system - tracks all changes.

Download: https://git-scm.com/downloads

### GitHub Desktop *(Recommended for non-developers)*

A visual interface for Git. Recommended for writers, researchers, and documentation contributors who are not comfortable with the terminal.

Download: https://desktop.github.com/

### Visual Studio Code *(Recommended editor)*

Download: https://code.visualstudio.com/

Recommended extensions:
- **Markdown All in One** - preview and shortcuts for Markdown
- **MDX** - syntax highlighting for `.mdx` files
- **GitHub Pull Requests** - manage PRs from inside VS Code
- **Prettier** - automatic formatting

### Node.js *(Required to run the site locally)*

Download: https://nodejs.org/ (v18 or higher)

---

## 5. First-Time Setup

**Step 1 - Clone the repository**

```bash
git clone https://github.com/adhinvs/The-Awareness-Project.git
cd The-Awareness-Project
```

**Step 2 - Install dependencies**

```bash
npm install
```

This downloads all required packages. The `node_modules/` folder it creates is not committed to the repository - this is normal and expected.

**Step 3 - Start the local development server**

```bash
npm start
```

Opens the site at `http://localhost:3000`. Any changes you make to content files are reflected live without restarting.

**Step 4 - Build for production** *(optional - for testing the final output)*

```bash
npm run build
```

---

## 6. Standard Collaboration Workflow

> Always follow this process. Never push directly to `main`.

### Step 1 - Pull the latest changes

Before starting any work, sync your local copy with the latest version:

```bash
git pull origin main
```

### Step 2 - Create a branch

Never work directly on `main`. Create a branch named after what you are working on:

```bash
git checkout -b docs/phishing-awareness
```

Branch naming examples:
```
docs/phishing-awareness
docs/password-safety
simulation/phishing-demo
fix/sidebar-links
design/phishing-banner
```

### Step 3 - Make your changes

Add or edit content. Follow the folder and naming conventions described in Section 7.

Examples:
- New module: `docs/scams-fraudulent-schemes/phishing-awareness.mdx`
- New simulation: `static/simulations/scams-fraudulent-schemes/phishing-awareness/phishing-demo.html`
- New image: `static/img/scams-fraudulent-schemes/phishing-awareness/phishing-banner.webp`

### Step 4 - Stage and commit your changes

```bash
git add .
git commit -m "Add phishing awareness module to scams section"
```

Write commit messages that explain *what* changed and *why*, not just *what files* were touched.

**Good:** `Add phishing awareness module to scams section`
**Bad:** `updated stuff` or `changes`

### Step 5 - Push your branch

```bash
git push origin docs/phishing-awareness
```

### Step 6 - Create a Pull Request on GitHub

1. Go to the repository on GitHub
2. Click **Compare & Pull Request**
3. Fill in the pull request template - describe what changed, what files were modified, and include screenshots if applicable
4. Submit for review

### Step 7 - Review and merge

A maintainer will review your pull request for:
- Structure and naming consistency
- Content accuracy
- Simulation behavior (if applicable)
- iframe responsiveness

Once approved, it will be merged into `main`.

---

## 7. Naming Conventions

Consistency is mandatory. Follow these patterns exactly.

### The core rule

**Use descriptive names, not numbers.** Numbers create ordering problems when new content is inserted later. Names are permanent and insertion-friendly.

This applies to every file, folder, and URL in the project.

### Section folders (inside `docs/`)

Use the full descriptive name of the section, lowercase and hyphen-separated.

```
docs/who-you-are-what-you-have/
docs/social-engineering-manipulation-tactics/
docs/scams-fraudulent-schemes/
```

Do not prefix with numbers. If you need to insert a new section between two existing ones, just name it and update the sidebar order in `sidebars.js`.

### Section overview files

Every section folder must contain an `index.mdx` file. This becomes the section landing page and its URL will be the folder name with no extra path segment.

```
docs/who-you-are-what-you-have/index.mdx
docs/social-engineering-manipulation-tactics/index.mdx
```

URL produced: `/docs/who-you-are-what-you-have/`

### Module (article) files

Use the full descriptive name of the article, lowercase and hyphen-separated. No `module-` prefix, no numbers.

```
your-identity-personal-information.mdx
your-passwords-account-access.mdx
phishing-awareness.mdx
authority-obedience.mdx
```

URL produced: `/docs/who-you-are-what-you-have/your-identity-personal-information`

### Image files

Images must be placed inside the folder that matches their section and module:

```
static/img/[section-name]/[module-name]/image-name.webp
static/img/[section-name]/section-image.webp
```

Examples:
```
static/img/who-you-are-what-you-have/your-passwords-account-access/password-breach.webp
static/img/social-engineering-manipulation-tactics/section2.webp
```

Use lowercase, hyphen-separated, descriptive names. Prefer `.webp` for photos and illustrations (smaller file size). Do not use camera roll names like `IMG_0022.png` or version names like `final-v2.jpg`.

### Simulation files

Simulations must be placed inside the folder that matches their section and module:

```
static/simulations/[section-name]/[module-name]/simulation-name.html
static/simulations/[section-name]/section/simulation-name.html
```

Examples:
```
static/simulations/who-you-are-what-you-have/your-passwords-account-access/auth-defeat-simulator.html
static/simulations/social-engineering-manipulation-tactics/section/social-engineering-simulator.html
```

### _category_.json files

Every section folder must contain a `_category_.json` file. The `id` field must point to the `index` file of that section:

```json
{
  "label": "Who You Are & What You Have",
  "position": 1,
  "link": {
    "type": "doc",
    "id": "who-you-are-what-you-have/index"
  }
}
```

---

## 8. How Simulations Work

Simulations are interactive HTML demos stored in `static/simulations/`. They are considered **first-class educational content**, not optional extras.

The pattern is:
```
MDX lesson -> iframe embed -> interactive simulation
```

### Embedding a simulation in an MDX lesson

```jsx
<iframe
  src="/simulations/who-you-are-what-you-have/your-passwords-account-access/auth-defeat-simulator.html"
  width="100%"
  height="700"
  style={{ border: 'none', borderRadius: '16px' }}
/>
```

**Technical guidelines:**
- Use `width="100%"` for responsive width
- Set a reasonable fixed `height` (600 to 800px depending on content)
- Always set `style={{ border: 'none' }}` for a clean look
- The simulation path must follow the section/module folder structure
- Test the simulation locally before submitting


### Simulation tone and visual style

Simulations are part of the article experience. They must feel consistent with the rest of the page, not like a separate tool dropped in from somewhere else.

**Use a light background.**
The site uses a light theme. Simulations should match this. Do not use dark or black backgrounds. Use white, off-white, or light grey as the base. If you need to highlight something, use soft colour accents rather than dark fills.

**Match the site's visual style.**
The site uses rounded cards, subtle shadows, and clean spacing. Simulations should feel like a natural extension of the page. Avoid sharp edges, heavy borders, dense tables, or anything that looks like a raw developer tool.

**Keep the tone calm and empowering.**
This project covers serious subjects like scams, manipulation, and surveillance. But the tone throughout is never alarming or threatening. The goal is to help people feel informed and capable, not scared. Simulations should reflect this.

- Do not use red warning screens, flashing alerts, or dramatic countdown timers as design choices
- Do not frame the experience as something the reader is failing at
- If a simulation shows a scam or attack, present it as something to understand and recognise, not something to fear

---

## 9. Visual and Tone Guidelines

This section applies to both images and simulations. Read it before submitting any visual asset.

### The overall tone

The Awareness Project covers topics that could easily feel heavy: scams, identity theft, manipulation, surveillance. We do not lean into that heaviness. The tone throughout is calm, clear, and feel-good. Readers should come away feeling more capable, not more anxious.

This tone must carry through into every image and simulation, not just the written content.

### Images

**Prefer light, clean, human visuals.**
Images should feel warm and approachable. Think soft lighting, open compositions, and everyday contexts. A person looking at a phone thoughtfully is better than a hooded figure at a keyboard.

**Avoid dark, threatening, or dramatic imagery.**
Do not use images that convey danger, fear, or surveillance in a heavy-handed way. No dark backgrounds with glowing red elements. No shadowy figures. No imagery designed to unsettle the reader.

**Use as little text in images as possible.**
Images should communicate visually. If you find yourself adding labels, warnings, or explanatory text inside an image, that content belongs in the article body instead. Keep images clean.

**Preferred formats and sizing:**
- Use `.webp` for all photos and illustrations (smaller file size, better quality)
- Use `.svg` for icons and logos
- Avoid `.jpg` for screenshots (use `.png` instead)

### What this looks like in practice

| Instead of this | Do this |
|---|---|
| A dark screen showing a hacker breaking in | A calm illustration of a lock or a phone with a notification |
| Bright red warning text over a black background | A soft-coloured card with a clear, plain-language explanation |
| A dense, text-heavy infographic | A clean visual with one idea per image |
| Stock imagery of a person in distress | A neutral, everyday scene that matches the article context |

---

## 10. Contribution Best Practices

### Always

- Pull latest changes before starting any work
- Create a new branch for each piece of work
- Write meaningful, descriptive commit messages
- Follow the folder structure and naming conventions exactly
- Test your content locally with `npm start`
- Test simulations for responsiveness and visual consistency with the site
- Submit changes via pull request

### Never

- Push directly to `main`
- Use numbers as prefixes in file or folder names
- Upload API keys, passwords, or sensitive data
- Create folders outside the established structure without discussing first
- Rename section folders without maintainer approval
- Break iframe paths in existing lessons
- Edit `src/theme/` files unless you are a technical maintainer
- Use dark backgrounds, alarming imagery, or threatening visuals in simulations or images

---

## 11. Learning Path for Beginners

If you are new to GitHub, learn these concepts in order. You do not need to learn everything at once.

| Step | Concept | What It Means |
|---|---|---|
| 1 | **Clone** | Download the repository to your computer |
| 2 | **Pull** | Sync your local copy with the latest changes on GitHub |
| 3 | **Branch** | Create an isolated copy to work on without affecting `main` |
| 4 | **Commit** | Save a snapshot of your changes with a message |
| 5 | **Push** | Upload your branch to GitHub |
| 6 | **Pull Request** | Ask maintainers to review and merge your changes |
| 7 | **Merge Conflicts** | What happens when two people edit the same file - learn to resolve them |

For writers and non-developers: **GitHub Desktop** handles steps 2 to 6 with a visual interface, so you do not need to use the terminal.

---

## 12. Pre-Upload Checklist

Go through every item below before opening a pull request. If any item is not checked, fix it first.

---

### Sync

- [ ] I have pulled the latest version of `main` before starting my work (`git pull origin main`)

---

### Naming and structure

- [ ] All new files and folders use descriptive names with no numbers as prefixes
- [ ] File and folder names are lowercase and hyphen-separated (example: `phishing-awareness.mdx`, not `PhishingAwareness.mdx` or `phishing_awareness.mdx`)
- [ ] New images are placed inside the correct `static/img/[section-name]/[module-name]/` folder
- [ ] New simulations are placed inside the correct `static/simulations/[section-name]/[module-name]/` folder
- [ ] If I added a new section, it has an `index.mdx` file and a `_category_.json` file
- [ ] If I added a new section, the `_category_.json` links to `[section-name]/index` (not a numbered or prefixed ID)

---

### Content quality

- [ ] The article reads clearly on a first read without needing background knowledge
- [ ] I have read the content at least twice and it makes sense both times
- [ ] Headings are used as headings (not bold text acting as headings)
- [ ] Facts and statistics include a source citation
- [ ] No placeholder text, unfinished sentences, or TODO comments remain
- [ ] The article includes at least one interactive element - a simulation, a quiz, an iframe tool, or a hands-on exercise. 

---

### Writing style

- [ ] I have not used em-dashes (`—`) anywhere in the content. Use a regular hyphen surrounded by spaces (` - `) instead
- [ ] Sentences are short and direct
- [ ] No unexplained jargon or acronyms without a definition on first use
- [ ] Every paragraph makes sense on its own. A reader who skips directly to any paragraph - without reading what came before - should still understand what it is saying. Do not rely on earlier paragraphs to explain terms, context, or concepts that appear later. If a paragraph needs context, provide it in that paragraph itself.

---

### File scope

- [ ] I have only edited the MDX file I intended to change
- [ ] I have not accidentally modified any `_category_.json`, `sidebars.js`, `docusaurus.config.js`, or files in `src/`
- [ ] No unrelated files appear in my commit (`git diff` shows only the files I meant to change)
- [ ] I have not moved, renamed, or deleted any existing file without maintainer approval

---

### Final check

- [ ] `npm start` runs without errors after my changes
- [ ] The page I edited looks correct in the browser at `http://localhost:3000`
- [ ] Any simulation I added or modified works correctly and is responsive

---

## Questions?

Open a [GitHub Issue](https://github.com/adhinvs/The-Awareness-Project/issues) and use the **Question** label. A maintainer will respond.

---

*The Awareness Project - Powered by [The Blue Signal](https://thebluesignal.com)*
