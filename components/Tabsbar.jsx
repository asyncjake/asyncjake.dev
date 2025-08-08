import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/markdown_icon.svg" filename="about.md" path="/about" />
      <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" />
      <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab icon="/html_icon.svg" filename="github.html" path="https://github.com/asyncjake" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
    </div>
  );
};

export default Tabsbar;
