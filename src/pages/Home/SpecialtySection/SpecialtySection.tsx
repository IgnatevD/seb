import { useState } from 'react';
import SpecialtyCard from '../../../components/SpecialtyCard';
import styles from './SpecialtySection.module.css';
import type { EducationLevel } from './specialtiesData';
import {
  specialtiesByLevel,
  specialtiesIntro,
  educationLevels,
} from './specialtiesData';

export default function SpecialtySection() {
  const [selectedLevel, setSelectedLevel] = useState<EducationLevel>('Бакалавр');

  const handleSelect = (title: string) => {
    window.location.href = `/specialty/${encodeURIComponent(title)}`;
  };

  const specialties = specialtiesByLevel[selectedLevel] ?? [];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.titleSpecialties}>{specialtiesIntro.title}</h2>
        <p className={styles.subtitle}>{specialtiesIntro.subtitle}</p>

        <div className={styles.levelSelector}>
          {educationLevels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={
                level === selectedLevel ? styles.activeLevelButton : styles.levelButton
              }
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {specialties.length > 0 ? (
          specialties.map(({ title, code, features, description }) => (
            <SpecialtyCard
              key={code}
              title={title}
              code={code}
              features={features}
              description={description}
              onSelect={() => handleSelect(code)}
            />
          ))
        ) : (
          <p className={styles.noSpecialties}>Немає спеціальностей для цього рівня освіти.</p>
        )}
      </div>
    </section>
  );
}
