import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Hero from '@site/src/components/Hero';
import CompanyLogos from '@site/src/components/CompanyLogos';
import TextImage from '@site/src/components/TextImage';
import intro from '@site/src/data/intro';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero
        badge="HI, MY NAME IS"
        heading="Anthony Romaine. I am a Software Developer."
        content="Passionate. Always learning. Love to be challenged."
        buttons={
          [
            {
              text: "Do You Want to Work With Me?",
              style: "fill",
              link: "https://www.linkedin.com/in/anthony-romaine-81b1b2202/"
            }
          ]
        }
      />
      <main>
        <CompanyLogos
          logos={
            [
              {
                src: "img/LNW.png",
                alt: "Light & Wonder Logo"
              },
              {
                src: "img/UNLV-Thin.png",
                alt: "UNLV Logo"
              }
            ]
          }
        />
        <TextImage text={intro.text} img={intro.img} imgSide={intro.imgSide} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
