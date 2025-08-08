import Image from 'next/image';
import styles from '../styles/ThemeInfo.module.css';

const ThemeInfo = ({ icon, name, publisher, theme, paletteType }) => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const themeTitle = (name, paletteType) => {
    return (
      <>
        <h3>{name}
          {paletteType == "dark" && (
            <span style={{ paddingLeft: 8 }}>🌙</span>
          )}
          {paletteType == "light" && (
            <span style={{ paddingLeft: 8 }}>🌤️</span>
          )}
        </h3>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          {themeTitle(name, paletteType)}
          <h5>{publisher}</h5>
        </div>
        <button onClick={() => setTheme(theme)}>Select Theme</button>
      </div>
    </div>
  );
};

export default ThemeInfo;
