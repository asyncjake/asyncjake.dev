import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.background}>
          <h2>HELP ME</h2>
          <h2>I'M TRAPPED</h2>
          <h2>IN A DIV</h2>
        </div> */}
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Jake Blow</h1>
            <h6 className={styles.bio}>Full-stack Dev / Cloud Eng / Good Comms</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
