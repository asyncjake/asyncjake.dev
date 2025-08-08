import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image src={project.image} width={100} height={100} style={{ borderRadius: 8, width: '100%', height: 'auto' }} alt={project.name} />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.bullets && (
          <div style={{ padding: 12, fontSize: 14 }} className={styles.tag}>
            <ul>
              {project.bullets.map((poppop) => (
                <li key={poppop}> {poppop} </li>
              ))}
            </ul>
          </div>
        )}
        <div className={styles.cta}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Official Link
            </a>
          )}
          {project.coming_soon && (
            <span className={styles.underline} >
              Coming Soon!
            </span>
          )}
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
