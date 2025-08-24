import React from 'react';
import styles from './SpecialtyInfoGrid.module.css';
import { specialtyTexts as t } from '../../data/specialties';

interface ISpecialtyInfoGridProps {
  specialty: {
    minBudgetScore2023: string | number;
    budgetPlaces: string | number;
    totalPlaces: string | number;
    costFullTime: string | number;
    costPartTime: string | number;
  };
}

export default function SpecialtyInfoGrid({ specialty }: ISpecialtyInfoGridProps) {
  return (
    <div className={styles.gridInfo}>
      <p>
        <strong>
          {t.minScore}
        </strong>
        <span>
          {' '}
          {specialty.minBudgetScore2023}
        </span>
      </p>
      <p>
        <strong>{t.budgetPlaces}</strong>
        {' '}
        {specialty.budgetPlaces}
      </p>
      <p>
        <strong>{t.totalPlaces}</strong>
        {' '}
        {specialty.totalPlaces}
      </p>
      <p>
        <strong>{t.fullTimeCost}</strong>
        {' '}
        {specialty.costFullTime}
      </p>
      <p>
        <strong>{t.partTimeCost}</strong>
        {' '}
        {specialty.costPartTime}
      </p>
    </div>
  );
}
