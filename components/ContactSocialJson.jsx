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
  //   link: 'nitinranganath',
  //   href: 'https://www.linkedin.com/in/nitinranganath/',
  // },
  // {
  //   social: 'twitter',
  //   link: 'iamnitinr',
  //   href: 'https://www.twitter.com/iamnitinr',
  // },
  {
    social: 'instagram',
    link: '@asyncjake',
    href: 'https://www.instagram.com/asyncjake',
  },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
];

const ContactSocialJson = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
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
