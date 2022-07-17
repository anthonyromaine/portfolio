import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Hero from '@site/src/components/Hero';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/*<HomepageHeader />*/}
      <Hero 
        badge="HI, MY NAME IS"
        heading="Anthony Romaine. I am a Software Developer."
        content="Passionate. Always learning. Love to be challenged."
        buttons={
          [
            {
              text: "Do You Want to Work With Me?", 
              style:"fill", 
              link:"https://www.linkedin.com/in/anthony-romaine-81b1b2202/"
            }
          ]
        }
      />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
