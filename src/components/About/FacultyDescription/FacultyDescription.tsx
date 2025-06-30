import styles from './FacultyDescription.module.css';
import { facultyInfo } from '../aboutData.ts';

export default function FacultyDescription() {
  const { title, intro, directionsTitle, directions, benefitsTitle, benefits, conclusion } = facultyInfo?.description;
  return (
    <section className={styles.container}>
      <p className={styles.paragraph}>
        <span>{title}</span>
        <span>{intro.text}</span>
      </p>

      <div className={styles.block}>
        <h3 className={styles.subheading}>{directionsTitle}</h3>
        <ul className={styles.list}>
          {directions.map((item, i) => (
            <li key={`direction-${i}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subheading}>{benefitsTitle}</h3>
        <ul className={styles.list}>
          {benefits.map((item, i) => (
            <li key={`benefit-${i}`}>{item}</li>
          ))}
        </ul>
      </div>

      <p className={styles.conclusion}>{conclusion}</p>
    </section>
  );
}
