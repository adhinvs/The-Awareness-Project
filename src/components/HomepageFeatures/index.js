import React, { useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    tag: 'LEARN',
    tagStyle: 'primary',
    title: 'Understand Risk.',
    description: (
      <>
        Decode the tactics used against you online, from everyday cyber threats to complex social engineering.
      </>
    ),
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={styles.cardIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    cardStyle: 'bordered',
    delay: ''
  },
  {
    tag: 'FACT-CHECK',
    tagStyle: 'white',
    title: 'Backed by Research.',
    description: (
      <>
        No guesswork. Our insights are built on hard data, behavioral science, and verified threat intelligence.
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
    tag: 'INTERACT',
    tagStyle: 'primary',
    title: 'Interactive Modules.',
    description: (
      <>
        Don't just read—experience. Test your reflexes against simulated manipulation tactics in real-time.
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
    tag: 'ACT',
    tagStyle: 'primary',
    title: 'Actionable Takeaways.',
    description: (
      <>
        Walk away from every module with clear, specific action items to harden your digital defenses immediately.
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
    title: 'Spotting Dark Patterns in UX',
    description: 'Understand how interfaces are designed to trick you into making choices you wouldn\'t otherwise make. Learn to navigate the web on your own terms.',
    topics: ['Forced Continuity', 'Hidden Costs', 'Confirmshaming', 'Bait and Switch']
  },
  {
    id: '03',
    title: 'Digital Psychology & Manipulation',
    description: 'Explore the cognitive biases that scammers and algorithms exploit to influence your decisions and behavior online.',
    topics: ['Social Engineering', 'Cognitive Biases', 'Emotional Triggers', 'FOMO']
  },
  {
    id: '04',
    title: 'AI Deception & Deepfakes',
    description: 'Learn to identify synthetic media, voice clones, and AI-generated text designed to deceive, manipulate, and defraud.',
    topics: ['Deepfakes', 'Voice Cloning', 'Synthetic Text', 'Verification']
  },
  {
    id: '05',
    title: 'Comprehensive Digital Awareness',
    description: 'A holistic approach to digital life, combining security, psychology, and critical thinking for complete and proactive resilience.',
    topics: ['Threat Modeling', 'Critical Thinking', 'Digital Footprint', 'Resilience']
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
          <Heading as="h2" style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--ifm-heading-font-family)' }}>What you will master.</Heading>
          <p style={{ fontSize: '1.25rem', color: 'var(--ifm-color-emphasis-700)', maxWidth: '600px', margin: '0 auto' }}>
            An ever-growing library of modules — summarised under these umbrella themes.
          </p>
        </div>
        
        <div className="row">
          <div className="col col--5 margin-bottom--lg animate-fade-up delay-100">
            <div className={styles.curriculumList}>
              {CurriculumData.map((theme) => (
                <div 
                  key={theme.id}
                  className={clsx(styles.curriculumListItem, { [styles.curriculumListItemActive]: activeTheme.id === theme.id })}
                  onClick={() => setActiveTheme(theme)}
                >
                  <div className={styles.itemHeader}>
                    <span className={styles.themeId}>{theme.id}</span>
                    {activeTheme.id === theme.id && <div className={styles.activeLine} />}
                    <span className={styles.themeArrow}>→</span>
                  </div>
                  <span className={styles.themeTitle}>{theme.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col col--7 animate-fade-up delay-200">
            <div className={styles.curriculumCard}>
              <div className={styles.curriculumCardBgNumber}>{activeTheme.id}</div>
              <div key={activeTheme.id} className="animate-fade-in" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className={styles.curriculumHeader}>
                  <div className={styles.shieldIconLarge}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className={styles.moduleNumber}>THEME {activeTheme.id}</span>
                </div>
                <Heading as="h3" style={{ fontFamily: 'var(--ifm-heading-font-family)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', marginTop: '1rem' }}>
                  {activeTheme.title}
                </Heading>
                <p className={styles.curriculumDescription}>
                  {activeTheme.description}
                </p>
                
                <div className="margin-top--xl" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
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
          <Heading as="h2" className="text--center margin-bottom--xl animate-fade-up" style={{ fontFamily: 'var(--ifm-heading-font-family)', fontSize: '3rem', fontWeight: 900 }}>
            A new approach to digital survival.
          </Heading>
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
            <div className="col col--6 animate-fade-up">
              <Heading as="h2" style={{ fontFamily: 'var(--ifm-heading-font-family)', color: 'white', fontSize: '3rem', fontWeight: 900 }}>
                Built by The Blue Signal.
              </Heading>
              <div className={styles.pillContainer} style={{ marginTop: '1.5rem' }}>
                <span className={clsx(styles.pill, styles.pillDark)}>OPEN Initiative</span>
                <span className={clsx(styles.pill, styles.pillDark)}>FREE Forever</span>
                <span className={clsx(styles.pill, styles.pillDark)}>EXPERT Driven</span>
              </div>
            </div>
            <div className="col col--6 animate-fade-up delay-100">
              <div className={styles.transparencyCard}>
                <span className={clsx(styles.tag, styles['tag-primary'], 'margin-bottom--md')} style={{ display: 'inline-block' }}>RADICAL TRANSPARENCY</span>
                <Heading as="h3" style={{ fontFamily: 'var(--ifm-heading-font-family)', color: 'white', fontSize: '1.75rem', fontWeight: 800 }}>Free for you, funded by what's below.</Heading>
                <p style={{ color: '#9CA3AF', marginBottom: 0, fontSize: '1.1rem', lineHeight: 1.6 }}>
                  The Awareness Project is a 100% free educational initiative. It's built and maintained by The Blue Signal... We believe digital literacy shouldn't have a price tag. Our professional services fund our public education work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className="container">
          <div className="row">
            <div className="col col--6 margin-bottom--lg animate-fade-up">
              <div className={clsx(styles.featureCard, styles['card-bordered'])} style={{ height: '100%' }}>
                <Heading as="h3" className={styles.cardTitle}>Book a Live Workshop</Heading>
                <p className={styles.cardDescription} style={{ marginBottom: '2.5rem' }}>
                  Bring The Awareness Project to your team... We run hands-on live workshops — online or in person — with customised scenarios, real attack simulations...
                </p>
                <div>
                  <Link className="button button--secondary button--outline button--lg" style={{ borderRadius: '2rem' }} to="https://adhinvs.com">
                    Book Workshop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--6 margin-bottom--lg animate-fade-up delay-100">
              <div className={clsx(styles.featureCard, styles['card-primary'])} style={{ height: '100%' }}>
                <Heading as="h3" className={styles.cardTitle}>Our Flagship: 'Mind Under Influence'</Heading>
                <p className={styles.cardDescription} style={{ marginBottom: '2.5rem' }}>
                  For those who want to master the behavioral psychology of the digital world, we offer an immersive 15-day online program...
                </p>
                <div>
                  <Link className="button button--secondary button--lg" style={{ borderRadius: '2rem', color: 'var(--ifm-color-primary)', fontWeight: 700 }} to="https://adhinvs.com/courses/mind-under-influence">
                    Explore Program
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
            <Heading as="h2" style={{ fontFamily: 'var(--ifm-heading-font-family)', color: 'white', fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>
              Ready to take control of your digital environment?
            </Heading>
            <p style={{ color: '#9CA3AF', fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
              Join the initiative to build a secure culture. No paywalls, no subscriptions. Just pure, actionable knowledge.
            </p>
            <Link className="button button--primary button--lg" to="/docs/intro" style={{ borderRadius: '2rem', padding: '1rem 3rem', fontSize: '1.2rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--ifm-color-primary) 0%, #1d4ed8 100%)', border: 'none', color: 'white' }}>
              Access Modules Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
