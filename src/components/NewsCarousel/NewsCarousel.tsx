import { useState, useEffect } from 'react';
import styles from './NewsCarousel.module.css';
import ingNew from 'src/img/news/new.png';
import ingNew1 from 'src/img/news/new1.avif';
import ingNew2 from 'src/img/news/new2.jpeg';

const newsItems = [
  {
    title: 'День відкритих дверей ХАІ',
    description: 'Запрошуємо на зустріч з викладачами, екскурсії кампусом і презентацію спеціальностей!',
    image: ingNew,
  },
  {
    title: 'Календар подій для вступників',
    description: 'Дізнайтесь про всі важливі дати: подача заяв, іспити, результати.',
    image: ingNew1,
  },
  {
    title: 'Нові освітні програми',
    description: 'У 2025 році відкриваються сучасні спеціальності в ІТ та інженерії!',
    image: ingNew2,
  },
];

export default function NewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <h2 className={styles.sectionTittle}>Наші події</h2>
      <div
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {newsItems.map(({ title, description, image }, i) => (
          <div key={i} className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.textBox}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
