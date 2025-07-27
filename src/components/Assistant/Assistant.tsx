import React, { useState } from 'react';
import styles from './Assistant.module.css';

const Assistant = () => {
  const categories = [
    'Випускник школи (НМТ 2025)',
    'Випускник школи (НМТ 2024)',
    'Випусник школи (НМТ 2022-2023)',
    'Випусник коледжу (НМТ 2025)',
    'Випусник коледжу (НМТ 2024)',
    'Випусник коледжу (НМТ 2022-2023)',
    'Вступаєте до магістратури',
  ];

  const subjects = [
    'Українська мова',
    'Математика',
    'Історія України',
    'Іноземна мова',
    'Фізика',
    'Біологія',
    'Хімія',
    'Географія',
    'Українська мова та література',
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [scores, setScores] = useState<Record<string, number>>({
  });

  const [preparationPassed, setPreparationPassed] = useState(false);

  const handleScoreChange = (subject: string, value: string) => {
    const num = parseInt(value, 10);

    if (!isNaN(num)) {
      setScores((prev) => ({
        ...prev, [subject]: num,
      }));
    } else {
      setScores((prev) => {
        const copy = {
          ...prev,
        };

        delete copy[subject];
        return copy;
      });
    }
  };

  const calculate = () => {
    alert('Тут буде логіка розрахунку');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Асистент при вступі</h2>
      <div className={styles.containerFlex}>
        <div>
          <div className={styles.containerSelect}>
            Ви...
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.select}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <p>Ваші бали НМТ (100..200)</p>
        </div>

        <div className={styles.subjectsGrid}>
          {subjects.map((subj) => (
            <label key={subj} className={styles.labelBlock}>
              {subj}
              :
              <input
                type="number"
                min={100}
                max={200}
                value={scores[subj] || ''}
                onChange={(e) => handleScoreChange(subj, e.target.value)}
                className={styles.inputNumber}
              />
            </label>
          ))}
          <div>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={preparationPassed}
                onChange={(e) => setPreparationPassed(e.target.checked)}
              />
              Успішне закінчення підготовчих курсів ХАІ (сертифікат)
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className={styles.button}
      >
        Розрахувати
      </button>
    </div>
  );
};

export default Assistant;
