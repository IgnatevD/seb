import { useParams } from 'react-router-dom';
import Container from '@/components/Container';
import CareerCard from '@/components/CareerCard';
import AlumniCard from '@/components/AlumnusCard';
import SpecialtyInfoGrid from '@/components/SpecialtyInfoGrid';
import { specialties, specialtyTexts as t } from '../../data/specialties';
import styles from './SpecialtyPage.module.css';

export default function SpecialtyPage() {
  const { slug } = useParams();

  const specialty = specialties.find((s) => s.slug === slug);

  if (!specialty) return <div className="text-center mt-10 text-xl">{t.notFound}</div>;

  return (
    <Container>
      <h1 className={styles.title}>
        {specialty.slug}
        {' '}
        {specialty.title}
      </h1>
      <p className={styles.degree}>{specialty.degree}</p>

      <SpecialtyInfoGrid specialty={specialty} />

      <p className={styles.description}>{specialty.description}</p>

      <div>
        <h2 className={styles.sectionTitle}>{t.programTitle}</h2>
        <ul className={styles.list}>
          {specialty.programs.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h2 className={styles.sectionTitle}>{t.careersTitle}</h2>
        <p className={styles.description}>{t.careersDescription}</p>
        <p className={styles.description}>{t.careersDescription2}</p>
        <div className={styles.careerGrid}>
          {specialty.careers.map((career, i) => (
            <CareerCard key={i} career={career} />
          ))}
        </div>
      </div>
      {!!specialty?.alumni.length && (
      <div>
        <h2 className={styles.sectionTitle}>{t.alumniTitle}</h2>
        <div className={styles.alumniGrid}>
          {specialty.alumni.map((alumnus, i) => (
            <AlumniCard
              key={i}
              name={alumnus.name}
              role={alumnus.role}
              company={alumnus.company}
              photoUrl=""
            />
          ))}
        </div>
      </div>
      )}

    </Container>
  );
}
