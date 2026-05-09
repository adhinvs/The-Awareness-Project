import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    tag: 'UNDERSTAND',
    tagStyle: 'primary',
    title: 'Know What You\'re Up Against.',
    description: (
      <>
        From phishing links to AI-generated voices — learn the tactics being used against you, explained without jargon.
      </>
    ),
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.cardIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    cardStyle: 'bordered',
    delay: ''
  },
  {
    tag: 'RESEARCH-BACKED',
    tagStyle: 'white',
    title: 'Built on Evidence, Not Opinion.',
    description: (
      <>
        Every module is grounded in behavioral science, verified threat data, and real-world case studies.
      </>
    ),
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.cardIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    cardStyle: 'primary',
    delay: 'delay-100'
  },
  {
    tag: 'EXPERIENCE',
    tagStyle: 'primary',
    title: 'Learn by Doing.',
    description: (
      <>
        Simulated scenarios, decision points, and real manipulation tactics — because reading about it isn't enough.
      </>
    ),
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.cardIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    cardStyle: 'dark',
    delay: 'delay-200'
  },
  {
    tag: 'APPLY',
    tagStyle: 'primary',
    title: 'Walk Away Knowing What to Do.',
    description: (
      <>
        Every module ends with specific, actionable steps you can apply to your digital life immediately.
      </>
    ),
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.cardIcon}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    cardStyle: 'grey',
    delay: 'delay-300'
  },
];

const CurriculumData = [
  {
    id: '01',
    title: 'Cyber Security Fundamentals',
    description: 'The essentials every digital citizen should know — passwords, phishing, secure browsing, account hygiene, and the small habits that block most attacks.',
    topics: ['Phishing', 'Passwords', '2FA', 'Browsers', 'Wi-Fi']
  },
  {
    id: '02',
    title: 'Digital Psychology & Manipulation',
    description: 'Explore the cognitive biases that scammers and algorithms exploit to influence your decisions and behavior online.',
    topics: ['Cognitive Biases', 'Dark Patterns', 'Persuasion Tactics', 'Emotional Exploitation']
  },
  {
    id: '03',
    title: 'Scams & Social Engineering',
    description: 'Understand how attackers bypass technical defenses by targeting you directly. Learn to spot the red flags in everyday communications.',
    topics: ['Vishing', 'Romance Scams', 'Impersonation', 'QR Fraud', 'Fake Websites']
  },
  {
    id: '04',
    title: 'AI Deception & Deepfakes',
    description: 'Learn to identify synthetic media, voice clones, and AI-generated text designed to deceive, manipulate, and defraud.',
    topics: ['Synthetic Media', 'Voice Cloning', 'AI Scams', 'Detection Methods']
  },
  {
    id: '05',
    title: 'Privacy & Data Awareness',
    description: 'Take back control over what you share. Learn how your data is tracked, collected, and monetised—and what you can do about it.',
    topics: ['Data Tracking', 'Digital Footprint', 'App Permissions', 'Data Economy']
  },
  {
    id: '06',
    title: 'Building Digital Resilience',
    description: 'A holistic approach to digital life, combining security, psychology, and critical thinking for complete and proactive resilience.',
    topics: ['Behavioral Change', 'Decision-Making Under Pressure', 'Habit Building', 'Awareness Frameworks']
  }
];

function Feature({tag, tagStyle, title, description, icon, cardStyle, delay}) {
  return (
    <div className={clsx('col col--6', styles.featureCol, 'animate-fade-up', delay)}>
      <div className={clsx(styles.featureCard, styles[`card-${cardStyle}`])}>
        <div className={styles.cardHeader}>
          <span className={clsx(styles.tag, styles[`tag-${tagStyle}`])}>{tag}</span>
          {icon}
        </div>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}

function CurriculumSection() {
  const [activeTheme, setActiveTheme] = useState(CurriculumData[0]);

  return (
    <section className={clsx(styles.sectionPadding, styles.bgGrey)}>
      <div className="container">
        <div className="text--center margin-bottom--xl animate-fade-up">
          <Heading as="h2" className={styles.sectionTitle}>What you will master.</Heading>
          <p className={styles.sectionDescription} style={{ color: 'var(--ifm-color-emphasis-700)', maxWidth: '600px', margin: '0 auto' }}>
            An ever-growing library — new modules added regularly.
          </p>
        </div>
        
        <div className="animate-fade-up delay-100">
          <div className={styles.curriculumTabs}>
            {CurriculumData.map((theme) => (
              <button 
                key={theme.id}
                className={clsx(styles.curriculumTab, { [styles.curriculumTabActive]: activeTheme.id === theme.id })}
                onClick={() => setActiveTheme(theme)}
              >
                <span className={styles.tabId}>{theme.id}</span>
                <span className={styles.tabTitle}>{theme.title}</span>
              </button>
            ))}
          </div>

          <div className="animate-fade-up delay-200">
            <div className={styles.curriculumCard}>
              <div className={styles.curriculumCardBgNumber}>{activeTheme.id}</div>
              <div key={activeTheme.id} className="animate-fade-in" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className={styles.curriculumHeader}>
                  <div className={styles.shieldIconLarge}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className={styles.moduleNumber}>THEME {activeTheme.id}</span>
                </div>
                <Heading as="h3" className={styles.curriculumThemeTitle}>
                  {activeTheme.title}
                </Heading>
                <p className={styles.curriculumDescription} style={{ maxWidth: '800px' }}>
                  {activeTheme.description}
                </p>
                
                <div className="margin-top--lg" style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <strong style={{ fontSize: '0.875rem', letterSpacing: '0.05em', display: 'block', marginBottom: '1rem', fontWeight: 900 }}>TOPICS INSIDE</strong>
                  <div className={styles.pillContainer}>
                    {activeTheme.topics.map((topic, i) => (
                      <span key={i} className={styles.pill}>{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.sectionPadding}>
        <div className="container">
          <Heading as="h2" className={clsx("text--center margin-bottom--md animate-fade-up", styles.sectionTitle)}>
            What is The Awareness Project?
          </Heading>
          <div className="text--center margin-bottom--xl animate-fade-up delay-100" style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
            <p className={styles.sectionDescription} style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem' }}>
              We live in a world where attention is manipulated and deception is engineered at scale. The Awareness Project is a free, research-backed education platform built to close the gap between knowing threats exist and recognizing them in real-time.
            </p>
            <div style={{ fontWeight: 700, color: 'var(--ifm-color-emphasis-900)' }}>
              Growing Module Library · Research-Backed · Built by Security Experts
            </div>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <CurriculumSection />

      <section className={clsx(styles.sectionPadding, styles.bgDark)}>
        <div className="container">
          <div className="row align-items-center">
            <div className={clsx("col col--5 animate-fade-up", styles.mobileCenter)}>
              <img 
                src="/img/tbslogo.svg" 
                alt="The Blue Signal Logo" 
                className={styles.tbsLogo}
                style={{ opacity: 0.95, display: 'block', marginBottom: '2rem', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.3))' }} 
              />
              <Heading as="h2" className={clsx(styles.sectionTitle, styles.sectionTitleWhite)} style={{ marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                Powered by<br/>The Blue Signal.
              </Heading>
              <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: '2.5rem', maxWidth: '90%' }}>
                Helping people make better digital decisions.
              </p>
              
            </div>
            <div className="col col--6 col--offset-1 animate-fade-up delay-100">
              <div className={styles.transparencyCard} style={{ textAlign: 'left' }}>
                <span className={clsx(styles.tag, styles['tag-primary'], 'margin-bottom--md')} style={{ display: 'inline-block' }}>WHO WE ARE</span>
                <p style={{ color: '#E5E7EB', marginBottom: '1.5rem', fontSize: '1.35rem', lineHeight: 1.6, fontWeight: 500 }}>
                  The Blue Signal is a digital initiative researching how people think, decide, and get deceived online.
                </p>
                <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.15rem', lineHeight: 1.6 }}>
                  We built The Awareness Project as our open contribution to the public—because access to knowledge shouldn't be a privilege, and digital literacy shouldn't have a price tag.
                </p>
                <Link className="button button--primary" style={{ borderRadius: '2rem' }} to="https://thebluesignal.com">
                  Explore The Blue Signal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className="container">
          <div className="text--center margin-bottom--xl animate-fade-up">
            <Heading as="h2" className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
              How We Keep This Free.
            </Heading>
            <p className={styles.sectionDescription} style={{ color: 'var(--ifm-color-emphasis-700)', maxWidth: '700px', margin: '0 auto' }}>
              The Awareness Project costs you nothing. It's funded by our professional work. Want us to share these insights with your team? Reach out anytime.
            </p>
          </div>
          <div className="row">
            <div className="col col--6 margin-bottom--lg animate-fade-up">
              <div className={clsx(styles.featureCard, styles['card-bordered'])} style={{ height: '100%' }}>
                <span className={clsx(styles.tag, styles['tag-primary'], 'margin-bottom--md')} style={{ display: 'inline-block' }}>LIVE WORKSHOP</span>
                <Heading as="h3" className={styles.cardTitle}>Book a Live Workshop Session</Heading>
                <p className={styles.cardDescription} style={{ marginBottom: '2.5rem', flexGrow: 1 }}>
                  Hands-on sessions designed for corporates, public events, and community programs. Real scenarios and conversations, customised for your audience.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Link className="button button--primary button--outline button--lg" style={{ borderRadius: '2rem', borderWidth: '2px', fontWeight: 600 }} to="https://adhinvs.com">
                    Book or Invite Us →
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--6 margin-bottom--lg animate-fade-up delay-100">
              <div className={clsx(styles.featureCard, styles['card-primary'])} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
                  <span className={clsx(styles.tag, styles['tag-white'])} style={{ display: 'inline-block', marginBottom: 0 }}>FLAGSHIP PROGRAM</span>
                  <span className={clsx(styles.tag, styles['tag-dark'])} style={{ display: 'inline-block', marginBottom: 0 }}>PREMIUM</span>
                </div>
                <Heading as="h3" className={styles.cardTitle}>Mind Under Influence</Heading>
                <p className={styles.cardDescription} style={{ marginBottom: '2.5rem', flexGrow: 1 }}>
                  A deep-dive into the behavioral psychology of the digital world. Master how technology and scams are engineered to influence human behavior.
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <Link className="button button--secondary button--lg" style={{ borderRadius: '2rem', color: 'var(--ifm-color-primary)', fontWeight: 700 }} to="https://adhinvs.com/courses/mind-under-influence">
                    Explore the Program →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className="container text--center">
          <div className={clsx(styles.finalCta, 'animate-fade-up')}>
            <Heading as="h2" className={clsx(styles.sectionTitle, styles.sectionTitleWhite)} style={{ marginBottom: '1rem' }}>
              Awareness is the first defense.
            </Heading>
            <p className={styles.sectionDescription} style={{ color: '#9CA3AF', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              No paywalls. No subscriptions. No login required. <br />
              Just some modules built to make you harder to manipulate.
            </p>
            <Link className="button button--primary button--lg" to="/docs/intro" style={{ borderRadius: '2rem', padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #1d4ed8 100%)', border: 'none', color: 'white' }}>
              Start Learning Free →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
