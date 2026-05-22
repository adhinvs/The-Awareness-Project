# The Awareness Project

**Helping people see through Digital Risk and Manipulation.**

The Awareness Project is a free, open-source education platform covering digital risk, manipulation tactics, AI deception, scams, and the psychology behind why they work. Built on research. Designed for everyone. No login. No paywall. No subscription.

> Powered by [The Blue Signal](https://thebluesignal.com) — a digital initiative researching how people think, decide, and get deceived online.

---

## What This Is

We live in a world where attention is manipulated and deception is engineered at scale. The Awareness Project exists to close the gap between knowing threats exist and actually recognizing them in real time.

The curriculum is structured across **13 sections and 89 modules**, covering everything from phishing and social engineering to AI deepfakes, dark patterns, financial exploitation, and recovery when things go wrong. Every module ends with specific, actionable steps you can apply to your digital life immediately.

---

## Curriculum Overview

| # | Section | What It Covers |
|---|---------|----------------|
| 01 | Who You Are & What You Have | Identity, passwords, financial assets, location data — what attackers want from you |
| 02 | Social Engineering & Manipulation Tactics | Authority, fear, trust, guilt, scarcity — the psychology exploited against you |
| 03 | Scams & Fraudulent Schemes | Government impersonation, romance scams, tech support fraud, investment schemes |
| 04 | Deceptive Communication | Phishing, smishing, vishing, fake websites, deepfakes, QR code attacks |
| 05 | AI Bias & Algorithmic Influence | Synthetic media, algorithmic bias, filter bubbles, AI hallucinations |
| 06 | Dark Patterns & Manipulative Design | Consent tricks, subscription traps, manufactured urgency, addictive design |
| 07 | Surveillance & Privacy Theft | Tracking technologies, behavioral profiling, corporate and government surveillance |
| 08 | Financial & Economic Exploitation | Payment fraud, SIM swap, account takeover, monetisation of addiction |
| 09 | Harassment, Abuse & Harm | Cyberbullying, doxxing, stalking, sextortion, reputational damage |
| 10 | Psychological & Behavioral Manipulation | Cognitive biases, FOMO, decision fatigue, addiction, gradual boundary erosion |
| 11 | Specialized Threats & Vulnerable Groups | Seniors, children, gamers, dating apps, health tech, smart home, workplace threats |
| 12 | When It Happens to You | Recovery: account compromise, financial loss, identity theft, intimate image abuse |
| 13 | Country-Specific Threats & Resources | India, United States, Europe, Southeast Asia — local scams, laws, and helplines |

The full curriculum with all 89 modules is listed in [`Documents/TheAwarenessProject_Curriculum.txt`](Documents/TheAwarenessProject_Curriculum.txt).

---

## Running Locally

This project is built with [Docusaurus](https://docusaurus.io/). You will need [Node.js](https://nodejs.org/) (v18 or higher) installed.

**1. Clone the repository**

```bash
git clone https://github.com/adhinvs/The-Awareness-Project.git
cd The-Awareness-Project
```

**2. Install dependencies**

```bash
npm install
```

This downloads all required packages into a local `node_modules/` folder (not included in the repo — this is normal).

**3. Start the development server**

```bash
npm start
```

Opens the site at `http://localhost:3000`. Changes to content files are reflected live without restarting.

**4. Build for production**

```bash
npm run build
```

Generates a static site in the `build/` folder, ready to be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

---

## Contributing

This project is open so that anyone can learn from it — and add to it. If you think a module is missing, a topic is incomplete, or something could be explained better, contributions are welcome.

**Ways to contribute:**

- **Add or improve a module** — Content lives in the `docs/` folder as `.mdx` files. Each section has its own subfolder.
- **Fix errors or outdated information** — Scam tactics and threat landscapes evolve. If something is wrong or stale, open a pull request.
- **Add country-specific content** — Section 13 covers India, USA, Europe, and Southeast Asia. More regions are needed.
- **Improve simulations** — Interactive HTML simulations live in `static/simulations/`. More scenarios are welcome.
- **Translate content** — Making this accessible in other languages is a future goal.

**To contribute:**

1. Fork the repository
2. Create a new branch (`git checkout -b your-topic-name`)
3. Make your changes
4. Submit a pull request with a brief description of what you added or changed

Please keep content factual, source claims where possible, and write in plain language — this is for everyone, not just technical readers.

---

## Project Structure

```
the-awareness-project/
├── docs/                  # All module content (.mdx files, organized by section)
├── src/
│   ├── components/        # React components (homepage features, quiz)
│   ├── pages/             # Landing page
│   └── css/               # Global styles
├── static/
│   ├── img/               # Logos and images
│   └── simulations/       # Interactive HTML simulations
├── Documents/             # Supporting documents and curriculum reference
├── docusaurus.config.js   # Site configuration
├── sidebars.js            # Sidebar navigation structure
└── package.json           # Project dependencies
```

---

## License

Content is open for learning and non-commercial use. If you use this material in workshops, training, or public education, a credit to The Awareness Project and The Blue Signal is appreciated.

---

## About The Blue Signal

The Blue Signal is a digital initiative helping people make better decisions online. The Awareness Project is our open contribution to the public — because access to knowledge should not be a privilege, and digital literacy should not have a price tag.

- Website: [thebluesignal.com](https://thebluesignal.com)
- Live workshops and corporate sessions: [adhinvs.com](https://adhinvs.com/hire-me)
- Flagship program — Mind Under Influence: [adhinvs.com/courses/mind-under-influence](https://adhinvs.com/courses/mind-under-influence)
