import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className="row" id="tryinsomthin">
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/docs/logic/intro">
              Z3 SMTLIB Tutorial 
            </Link> 
            <></>
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/programming/Programming Z3/Using Z3 from Python/Introduction">
              Programming Z3 
            </Link> 
            <></>
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/docs/playground/playground">
              Playground
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation for ${siteConfig.title}`}
      description="An interactive online for the Z3 theorem prover with the ability to execute Z3 in the browser.">
      <HomepageHeader />
    </Layout>
  );
}
