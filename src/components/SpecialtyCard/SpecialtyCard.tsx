import type {KeyboardEvent, MouseEvent} from 'react';
import styles from './SpecialtyCard.module.css';

interface SpecialtyCardProps {
  title: string;
  code: string;
  features?: string[];
  description: string;
  onSelect?: () => void;
}

export default function SpecialtyCard({
                                        title,
                                        code,
                                        features = [],
                                        description,
                                        onSelect = () => {
                                        },
                                      }: SpecialtyCardProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onSelect();
  };

  return (
    <div
      onClick={onSelect}
      className={styles.card}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.code}>{code}</span>
      </div>

      <ul className={styles.features}>
        {features.map((feat, idx) => (
          <li key={idx} className={styles.featureItem}>
            {feat}
          </li>
        ))}
      </ul>

      <p className={styles.description}>{description}</p>

      <button
        onClick={handleButtonClick}
        className={styles.selectButton}
        type="button"
      >
        Обрати спеціальність
      </button>
    </div>
  );
}
