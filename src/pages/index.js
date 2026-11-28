import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col--7 text--left animate-fade-up">
            <span className={styles.heroBadge}>
              <svg className={styles.shieldIcon} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 2.5 20 5v6.1c0 5.1-3.4 8.7-8 10.4-4.6-1.7-8-5.3-8-10.4V5l8-2.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="m8.5 11.8 2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Free. Forever. No login required.
            </span>
            <Heading as="h1" className={clsx(styles.heroTitle, styles.heroTitleBlack)}>
              See Through <span className={styles.highlightText}>Digital Risk</span> and Manipulation.
            </Heading>
            <p className={styles.heroSubtitle}>
              Learn to spot scams, recognise manipulation, and make safer digital decisions. Explore free guides on digital risk, AI deception, and the psychology behind them, at your own pace.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.primaryButton)}
                to="/docs/intro">
                Explore Modules
              </Link>
            </div>
            <div className={styles.heroAttribution}>
              <span style={{ color: 'var(--ifm-color-emphasis-600)' }}>Powered by</span>
              <img src="/img/tbslogo.svg" alt="" style={{ height: '1.5rem', opacity: 0.85 }} />
              <strong className={styles.heroAttributionStrong}>
                The Blue Signal
              </strong>
            </div>
          </div>
          <div className="col col--5 animate-fade-up delay-200">
            <div className={styles.heroImageContainer}>
              <div className={styles.heroGlow}></div>
              <img src="/img/logo.svg" alt="The Awareness Project symbol" className={styles.heroLogo} />
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
