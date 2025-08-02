import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import styles from './ContactButton.module.css';

export default function ContactButton() {
  const [visible, setVisible] = useState(false);

  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible((prev) => !prev);
    }, textVisible ? 5000 : 10000);

    return () => clearTimeout(timeout);
  }, [textVisible]);

  return (
    <div className={`${styles.contactWrapper} ${visible ? styles.show : ''}`}>
      <span className={`${styles.contactText} ${textVisible ? styles.textVisible : styles.textHidden}`}>
        Потрібна
        <br />
        консультація?
      </span>
      <a
        href="https://t.me/sebVSTUP"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactButton}
      >
        <SendIcon fontSize="small" />
      </a>
    </div>
  );
}
