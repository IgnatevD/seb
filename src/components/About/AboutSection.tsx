import { facultyInfo } from './aboutData';
import type { StaffMember } from './aboutData';
import styles from './AboutSection.module.css';
import StaffCard from '../StaffCard/StaffCard';
import FacultyDescription from './FacultyDescription';

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>{facultyInfo.sectionTitle}</h2>

      <article className={styles.text}>
        <FacultyDescription />
      </article>

      <h3 className={styles.subheading}>{facultyInfo.deanateTitle}</h3>
      <div className={styles.staffGrid}>
        {facultyInfo.deanate.map((m: StaffMember) => (
          <StaffCard key={m.name} photoUrl={m.photoUrl} name={m.name} role={m.role} />
        ))}
      </div>

      <h3 className={styles.subheading}>{facultyInfo.departmentsTitle}</h3>
      <div className={styles.staffGrid}>
        {facultyInfo.departments.map((m: StaffMember) => (
          <StaffCard key={m.name} photoUrl={m.photoUrl} name={m.name} role={m.role} />
        ))}
      </div>
    </section>
  );
}
