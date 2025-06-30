
import { useParams } from "react-router-dom";
import { specialties, specialtyTexts as t  } from "../../data/specialties";
import styles from "./SpecialtyPage.module.css";

export default function SpecialtyPage() {
  const { slug } = useParams();
  const specialty = specialties.find(s => s.slug === slug);

  if (!specialty)
    return <div className="text-center mt-10 text-xl">{t.notFound}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{specialty.title}</h1>
      <p className={styles.degree}>({specialty.degree})</p>

      <div className={styles.gridInfo}>
        <p><strong>{t.minScore}</strong> {specialty.minBudgetScore2023}</p>
        <p><strong>{t.budgetPlaces}</strong> {specialty.budgetPlaces}</p>
        <p><strong>{t.totalPlaces}</strong> {specialty.totalPlaces}</p>
        <p><strong>{t.fullTimeCost}</strong> {specialty.costFullTime}</p>
        <p><strong>{t.partTimeCost}</strong> {specialty.costPartTime}</p>

      </div>

      <p className={styles.description}>{specialty.description}</p>

      <div>
        <h2 className={styles.sectionTitle}>{t.programTitle}</h2>
        <ul className={styles.list}>
          {specialty.programs.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>{t.careersTitle}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {specialty.careers.map((career, i) => (
            <div key={i} className={styles.careerCard}>
              <h3 className={styles.careerTitle}>{career.title}</h3>
              <p className={styles.salary}>{career.salary}</p>
              <p>{career.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>{t.alumniTitle}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {specialty.alumni.map((alumnus, i) => (
            <div key={i} className={styles.alumniCard}>
              <strong>{alumnus.name}</strong><br />
              {alumnus.role} у <em>{alumnus.company}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
