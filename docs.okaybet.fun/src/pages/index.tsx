import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <div className={styles.description}>
          <p>
            A PvP P2P platform for making and settling bets with your friends
            and community. This site is the documentation and information on Okay Bet. Check out&nbsp;     
            <a href="https://okaybet.fun"  rel="noopener noreferrer" className={styles.link}>
               okaybet.fun 
            </a>, and below is a demo on how it works.
          </p>
        </div>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.videoContainer}>
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/flh6mA8iqk4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Okay Bet`} description="P2P PvP Betting Platform">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
