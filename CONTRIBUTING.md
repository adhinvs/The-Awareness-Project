# Contributing to The Awareness Project

Welcome — and thank you for being here.

The Awareness Project is a free, open education platform helping people recognise digital risk and manipulation. Every contribution — whether it's a new module, a simulation, a translation, or a typo fix — directly helps someone make a safer decision online.

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
9. [Contribution Best Practices](#9-contribution-best-practices)
10. [Learning Path for Beginners](#10-learning-path-for-beginners)

---

## 1. Understanding the Project

The Awareness Project is built on [Docusaurus](https://docusaurus.io/) — a documentation platform that lets us write lessons in Markdown/MDX and publish them as a full website.

This repository is not just a traditional software repository. It combines:

- **Curriculum modules** — written lessons and educational content
- **Interactive simulations** — HTML-based demos embedded inside lessons
- **Visual assets** — banners, illustrations, and awareness graphics
- **Custom UI components** — React components for the homepage and learning experience

The curriculum is structured across **13 sections and 89 modules**, covering social engineering, scams, AI deception, dark patterns, surveillance, financial exploitation, and more. See the [full curriculum](Documents/TheAwarenessProject_Curriculum.txt).

---

## 2. Repository Architecture

```
The-Awareness-Project/
│
├── docs/                        ← All lesson content (MDX files)
│   ├── 01-who-you-are-what-you-have/
│   ├── 02-social-engineering-manipulation-tactics/
│   ├── 03-scams-fraudulent-schemes/
│   └── ...
│
├── static/
│   ├── img/                     ← Banners, icons, illustrations
│   └── simulations/             ← Interactive HTML simulations
│
├── src/
│   ├── components/              ← Reusable React components
│   ├── pages/                   ← Landing page
│   ├── css/                     ← Global styles
│   └── theme/                   ← Docusaurus theme overrides
│
├── Documents/                   ← Reference documents
├── README.md
├── CONTRIBUTING.md              ← This file
├── sidebars.js                  ← Sidebar navigation structure
├── docusaurus.config.js         ← Site configuration
└── package.json                 ← Project dependencies
```

### The Five Layers

| Layer | Folder | What It Is |
|---|---|---|
| 1 | `docs/` | Curriculum — lessons, modules, sections |
| 2 | `static/simulations/` | Interactive HTML simulations (first-class content) |
| 3 | `static/img/` | Visual assets — banners, icons, screenshots |
| 4 | `src/` | Frontend — React components, homepage, styling |
| 5 | `src/theme/` | Theme overrides — affects the entire site |

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
**Can edit:** Everything — `src/`, `src/theme/`, config files

**Tasks:**
- Architecture and infrastructure
- React components and theme customization
- Docusaurus configuration and deployment
- Reviewing and merging pull requests

---

## 4. Required Software

### Git
Version control system — tracks all changes.

Download: https://git-scm.com/downloads

### GitHub Desktop *(Recommended for non-developers)*
A visual interface for Git. Recommended for writers, researchers, and documentation contributors who are not comfortable with the terminal.

Download: https://desktop.github.com/

### Visual Studio Code *(Recommended editor)*
Download: https://code.visualstudio.com/

Recommended extensions:
- **Markdown All in One** — preview and shortcuts for Markdown
- **MDX** — syntax highlighting for `.mdx` files
- **GitHub Pull Requests** — manage PRs from inside VS Code
- **Prettier** — automatic formatting

### Node.js *(Required to run the site locally)*
Download: https://nodejs.org/ (v18 or higher)

---

## 5. First-Time Setup

**Step 1 — Clone the repository**

```bash
git clone https://github.com/adhinvs/The-Awareness-Project.git
cd The-Awareness-Project
```

**Step 2 — Install dependencies**

```bash
npm install
```

This downloads all required packages. The `node_modules/` folder it creates is not committed to the repository — this is normal and expected.

**Step 3 — Start the local development server**

```bash
npm start
```

Opens the site at `http://localhost:3000`. Any changes you make to content files are reflected live without restarting.

**Step 4 — Build for production** *(optional — for testing the final output)*

```bash
npm run build
```

---

## 6. Standard Collaboration Workflow

> Always follow this process. Never push directly to `main`.

### Step 1 — Pull the latest changes

Before starting any work, sync your local copy with the latest version:

```bash
git pull origin main
```

### Step 2 — Create a branch

Never work directly on `main`. Create a branch named after what you are working on:

```bash
git checkout -b docs/phishing-awareness
```

Branch naming examples:
```
docs/password-safety
docs/otp-scams
simulation/phishing-demo
fix/sidebar-links
design/phishing-banner
```

### Step 3 — Make your changes

Add or edit content. Examples:
- New module: `docs/03-scams-fraudulent-schemes/module-02-phishing.mdx`
- New simulation: `static/simulations/simulation-phishing-demo.html`
- New image: `static/img/phishing-banner.webp`

### Step 4 — Stage and commit your changes

```bash
git add .
git commit -m "Add phishing awareness module to Section 3"
```

Write commit messages that explain *what* changed and *why*, not just *what files* were touched.

**Good:** `Add phishing awareness module to Section 3`
**Bad:** `updated stuff` or `changes`

### Step 5 — Push your branch

```bash
git push origin docs/phishing-awareness
```

### Step 6 — Create a Pull Request on GitHub

1. Go to the repository on GitHub
2. Click **Compare & Pull Request**
3. Fill in the pull request template — describe what changed, what files were modified, and include screenshots if applicable
4. Submit for review

### Step 7 — Review and merge

A maintainer will review your pull request for:
- Structure and naming consistency
- Content accuracy
- Simulation behavior (if applicable)
- iframe responsiveness

Once approved, it will be merged into `main`.

---

## 7. Naming Conventions

Consistency is mandatory. Follow these patterns exactly.

### Curriculum section folders
```
01-topic-name
02-topic-name
```
Example: `03-scams-fraudulent-schemes`

> Do NOT rename top-level curriculum folders without maintainer approval.

### Module files
```
module-01-topic-name.mdx
```
Example: `module-02-password-security.mdx`

### Section overview files
```
section-01-topic-name.mdx
```
Example: `section-01-who-you-are.mdx`

### Simulation files
```
simulation-topic-name.html
```
Examples:
```
simulation-data-broker.html
simulation-phishing-demo.html
```

### Image files
**Good:**
```
phishing-banner.webp
otp-scam-example.png
```
**Bad:**
```
IMG_0022.png
final-v2.jpg
Screenshot 2024.png
```

Use lowercase, hyphen-separated, descriptive names. Prefer `.webp` for photos and illustrations (smaller file size).

---

## 8. How Simulations Work

Simulations are interactive HTML demos stored in `static/simulations/`. They are considered **first-class educational content** — not optional extras.

The pattern is:
```
MDX lesson → iframe embed → interactive simulation
```

### Embedding a simulation in an MDX lesson

```jsx
<iframe
  src="/simulations/simulation-data-broker.html"
  width="100%"
  height="700"
  style={{ border: 'none' }}
/>
```

**Guidelines:**
- Use `width="100%"` for responsive width
- Set a reasonable fixed `height` (600–800px depending on content)
- Always set `style={{ border: 'none' }}` for a clean look
- Test the simulation locally before submitting

**Types of simulations contributors can build:**
- Phishing email demos
- Fake login page walkthroughs
- Social engineering scenario simulations
- Data broker exposure demonstrations
- Scam detection exercises

---

## 9. Contribution Best Practices

### Always
- Pull latest changes before starting any work
- Create a new branch for each piece of work
- Write meaningful, descriptive commit messages
- Follow the folder structure and naming conventions
- Test your content locally with `npm start`
- Test simulations for responsiveness
- Submit changes via pull request

### Never
- Push directly to `main`
- Upload API keys, passwords, or sensitive data
- Create folders outside the established structure without discussing first
- Rename major curriculum section folders without approval
- Break iframe paths in existing lessons
- Edit `src/theme/` files unless you are a technical maintainer

---

## 10. Learning Path for Beginners

If you are new to GitHub, learn these concepts in order. You do not need to learn everything at once.

| Step | Concept | What It Means |
|---|---|---|
| 1 | **Clone** | Download the repository to your computer |
| 2 | **Pull** | Sync your local copy with the latest changes on GitHub |
| 3 | **Branch** | Create an isolated copy to work on without affecting `main` |
| 4 | **Commit** | Save a snapshot of your changes with a message |
| 5 | **Push** | Upload your branch to GitHub |
| 6 | **Pull Request** | Ask maintainers to review and merge your changes |
| 7 | **Merge Conflicts** | What happens when two people edit the same file — learn to resolve them |

For writers and non-developers: **GitHub Desktop** handles steps 2–6 with a visual interface, so you do not need to use the terminal.

---

## Questions?

Open a [GitHub Issue](https://github.com/adhinvs/The-Awareness-Project/issues) and use the **Question** label. A maintainer will respond.

---

*The Awareness Project — Powered by [The Blue Signal](https://thebluesignal.com)*
