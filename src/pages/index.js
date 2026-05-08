import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col--7 text--left animate-fade-up">
            <span className={styles.heroBadge}>
              <span className={styles.shieldIcon}>🛡️</span> 100% Free. Always.
            </span>
            <Heading as="h1" className={styles.heroTitle}>
              Helping people see through <span className={styles.highlightText}>Digital Risk</span> and Manipulation.
            </Heading>
            <p className={styles.heroSubtitle}>
              Master the human side of cybersecurity. Dive into interactive modules backed by research to understand risks, recognize digital psychology, and get actionable steps to protect yourself.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.primaryButton)}
                to="/docs/intro">
                Explore Free Modules
              </Link>
            </div>
          </div>
          <div className="col col--5 animate-fade-up delay-200">
            <div className={styles.heroImageContainer}>
              <div className={styles.heroGlow}></div>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.15"/>
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M40,100 C60,60 140,60 160,100 C140,140 60,140 40,100 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
                <circle cx="100" cy="100" r="20" fill="currentColor" className={styles.svgHighlight}/>
                <circle cx="140" cy="50" r="5" fill="var(--ifm-color-primary)"/>
                <circle cx="40" cy="150" r="8" fill="var(--ifm-color-primary)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Helping people see through digital risk and manipulation.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
