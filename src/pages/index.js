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
import experience from '@site/src/data/experience';
import heading from '@site/src/data/heading';
import projects from '@site/src/data/projects';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero
        options={heading}
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
        <hr />
        <Hero options={{ heading: "My Coding Projects" }} />
        {projects.map((project) => <TextImage text={project.text} img={project.img} imgSide={project.imgSide} imgFirst={project.imgFirst} />)}
        <hr />
        {experience.map((position) => <Hero options={position} />)}
      </main>
    </Layout>
  );
}
