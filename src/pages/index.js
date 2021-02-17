import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Documentation',
    imageUrl: 'img/undraw_at_work.svg',
    description: (
      <>
        Documentation for our open source projects.
      </>
    ),
    buttonText: 'View Documentation',
    buttonUrl: '/docs',
  },
  {
    title: 'Repositories',
    imageUrl: 'img/undraw_source_code.svg',
    description: (
      <>
        Open source code repositories.
      </>
    ),
    buttonText: 'Browse Repositories',
    buttonUrl: '/repositories',
  },
];

function Feature({imageUrl, title, description, buttonText, buttonUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  const aUrl = useBaseUrl(buttonUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={aUrl} className="button button--block button--secondary">{buttonText}</a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The open source projects of ElectricMagnetic">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
