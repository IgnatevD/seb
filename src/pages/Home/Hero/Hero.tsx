import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { facultyInfo } from './heroData';
import PartnersMarquee from "../../../components/PartnersMarquee";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = facultyInfo.motivationMessages[currentIndex];

    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayedText.length < currentMessage.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
      }, 80);
    } else if (!isDeleting && displayedText === currentMessage) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % facultyInfo.motivationMessages.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <section id="home" className={`${styles.hero} glass`}>
      <h1 className={styles.title}>
        {facultyInfo.facultyName.map((line, index) => (
          <span key={index}>{index === 0 ? (
            <>
              {line}
              <br />
            </>
          ) : (
            line
          )}</span>
        ))}
      </h1>
      <p className={styles.subtitle}>
        {facultyInfo.subtitleLines}
      </p>

      <p className={styles.motivation}>
        <span className={styles.message}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </span>
      </p>

      <div className={styles.stats}>
        {facultyInfo.stats.map((item, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.statNumber}>{item.number}</span>
            <span className={styles.statLabel}>{item.label}</span>
          </div>
        ))}
      </div>
      <PartnersMarquee />
    </section>
  );
}
