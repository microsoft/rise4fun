import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import favicon from '/img/favicon/favicon.ico';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" id="tryinsomthin">
      <div class="row">
      <div class="col">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
            <Link
              className={clsx("button button--secondary button--lg", styles.mainButton)}
              to="/docs/logic/intro">
              Z3 Tutorial 
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
      <div class="col">
        <h1> Hi </h1>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
