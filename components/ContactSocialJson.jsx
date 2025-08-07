import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'https://asyncjake.dev',
    href: 'https://asyncjake.dev',
  },
  {
    social: 'email',
    link: 'contact@asyncjake.dev',
    href: 'mailto:contact@asyncjake.dev',
  },
  {
    social: 'github',
    link: 'asyncjake',
    href: 'https://github.com/asyncjake',
  },
  // {
  //   social: 'linkedin',
  //   link: 'asyncjake',
  //   href: 'https://www.linkedin.com/in/asyncjake/',
  // },
  {
    social: 'twitter',
    link: 'asyncjake',
    href: 'https://x.com/asyncjake',
  },
  {
    social: 'instagram',
    link: '@asyncjake',
    href: 'https://www.instagram.com/asyncjake',
  },
];

const ContactSocialJson = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactSocialJson;
