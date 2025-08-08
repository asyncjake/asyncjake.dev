import ThemeInfo from '../components/ThemeInfo';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <>
      <h2>Site Themes</h2>
      <h5 style={{ paddingTop: 8 }}>All of these themes are placeholders, but will soon only include themes from my custom VSCode theme pack!  </h5>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
          paletteType="dark"
        />
        <ThemeInfo
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
          paletteType="light"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
          paletteType="dark"
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
          paletteType="dark"
        />
        <ThemeInfo
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
          paletteType="dark"
        />
        <ThemeInfo
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
          paletteType="light"
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
