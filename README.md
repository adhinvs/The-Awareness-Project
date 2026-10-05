# The Awareness Project

**A free, open-source digital safety curriculum for recognizing manipulation, scams, AI deception, privacy risks, and online harm before they become personal.**

[The Awareness Project](https://theawarenessproject.in) is built for everyday people, educators, parents, students, teams, and communities who want clearer judgment in a noisy digital world. It turns complex digital threats into plain-language lessons, practical recovery steps, and interactive learning experiences.

> An initiative by [The Blue Signal](https://thebluesignal.com), helping people make better digital decisions.

---

## Why It Exists

Digital risk is no longer only technical. It is psychological, financial, social, emotional, and increasingly automated. People are targeted through trust, fear, urgency, shame, loneliness, status anxiety, convenience, and carefully designed interfaces.

The Awareness Project helps close the gap between "I know scams exist" and "I can recognize what is happening to me in the moment."

The curriculum is organized around real-world situations: what attackers want, how manipulation works, what platforms and algorithms amplify, what to do when harm happens, and which protective habits matter most.

---

## What You Will Find

- **15 curriculum sections** covering identity, social engineering, scams, AI deception, dark patterns, surveillance, harassment, financial exploitation, recovery, and digital protection habits.
- **110 learning modules** written in accessible language for non-technical readers.
- **Interactive simulations** that help people practice spotting risk instead of only reading about it.
- **Action-focused guidance** with practical steps people can use immediately.
- **Country-specific resources** for regional scams, legal context, reporting routes, and support pathways.
- **Open-source structure** so contributors can improve, localize, and extend the project.

---

## Curriculum Map

| # | Section | Focus |
|---|---------|-------|
| 01 | Who You Are & What You Have | Identity, passwords, money, location, and the assets attackers try to reach. |
| 02 | Social Engineering & Manipulation Tactics | Authority, fear, trust, guilt, scarcity, reciprocity, and emotional pressure. |
| 03 | Scams & Fraudulent Schemes | Impersonation, romance scams, job scams, tech support fraud, investment traps, and recovery scams. |
| 04 | Deceptive Communication | Phishing, smishing, vishing, fake websites, fake credentials, deepfakes, and QR-code attacks. |
| 05 | AI Bias & Algorithmic Influence | Synthetic media, AI hallucinations, algorithmic bias, persuasion at scale, and filter bubbles. |
| 06 | Dark Patterns & Manipulative Design | Consent tricks, subscription traps, fake urgency, gamification loops, and misleading commerce design. |
| 07 | Marketing & Advertising Manipulation | Targeting pipelines, influencer deception, gambling hooks, political microtargeting, and attention economics. |
| 08 | Surveillance & Privacy Theft | Tracking technologies, data brokers, behavioral profiling, and corporate or government surveillance. |
| 09 | Financial & Economic Exploitation | Payment fraud, SIM swaps, account takeover, and business models that monetize addiction. |
| 10 | Harassment, Abuse & Harm | Cyberbullying, stalking, sextortion, image-based abuse, grooming, and reputational attacks. |
| 11 | Psychological & Behavioral Manipulation | Cognitive biases, FOMO, decision fatigue, compulsive loops, and gradual boundary erosion. |
| 12 | Specialized Threats & Vulnerable Groups | Risks affecting children, seniors, gamers, activists, workers, dating-app users, smart homes, health tech, and Web3 users. |
| 13 | When It Happens to You | Practical response paths for hacked accounts, lost money, identity theft, harassment, intimate image abuse, and digital aftermath. |
| 14 | Country-Specific Threats & Resources | India, the United States, North America, Europe, Southeast Asia, the Gulf, the United Kingdom, and Australia. |
| 15 | Your Digital Protection Habits | Devices, accounts, permissions, networks, privacy settings, and everyday behavior changes that reduce risk. |

---

## Built With

- [Docusaurus](https://docusaurus.io/) for the documentation site
- React and MDX for pages, components, and learning modules
- Static HTML simulations for interactive practice scenarios
- Custom styling and theme components for the public learning experience

---

## Running Locally

You need [Node.js](https://nodejs.org/) **20 or newer**.

```bash
git clone https://github.com/adhinvs/The-Awareness-Project.git
cd The-Awareness-Project
npm install
npm start
```

The local site runs at:

```text
http://localhost:3000
```

To create a production build:

```bash
npm run build
```

The static output is generated in the `build/` directory and can be deployed to any static hosting platform.

---

## Project Structure

```text
the-awareness-project/
├── docs/                  # Curriculum sections and learning modules
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/             # Site landing page
│   ├── css/               # Global styling
│   └── theme/             # Docusaurus theme customizations
├── static/
│   ├── img/               # Logos, section images, and module visuals
│   └── simulations/       # Interactive HTML learning simulations
├── docusaurus.config.js   # Site and theme configuration
├── sidebars.js            # Documentation navigation
└── package.json           # Scripts and dependencies
```

---

## Contributing

Contributions are welcome, especially improvements that make the project clearer, more practical, more current, or more accessible.

Good places to help:

- Improve or expand existing modules in `docs/`
- Add new country-specific scam and support resources
- Update outdated threat examples or reporting guidance
- Build new interactive simulations in `static/simulations/`
- Improve accessibility, readability, images, or navigation
- Translate or adapt content for more communities

Please write for real people, not only technical readers. Keep explanations factual, cite sources where appropriate, avoid fear-driven language, and focus on useful decisions a person can make.

---

## Useful Commands

```bash
npm start              # Start the local development server
npm run build          # Build the production site
npm run serve          # Serve the production build locally
npm run clear          # Clear Docusaurus caches
npm run write-heading-ids
```

---

## License

This project is open for learning, public education, and non-commercial use. If you use the material in workshops, training, classrooms, or community programs, credit to The Awareness Project and The Blue Signal is appreciated.

---

## About The Blue Signal

[The Blue Signal](https://thebluesignal.com) is a digital initiative focused on helping people make better decisions online. The Awareness Project is its open educational contribution to digital literacy, manipulation awareness, and safer online behavior.

- Website: [thebluesignal.com](https://thebluesignal.com)
- Workshops and sessions: [adhinvs.com](https://adhinvs.com/hire-me)
- Flagship program: [Mind Under Influence](https://adhinvs.com/courses/mind-under-influence)
