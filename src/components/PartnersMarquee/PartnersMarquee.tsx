import styles from './PartnersMarquee.module.css';

const partners = [
  '🎓 ХАІ',
  '💼 SoftServe',
  '🌐 EPAM',
  '📚 NIX',
  '🔬 Інститут кібернетики',
  '🧪 Sigma Software',
];

export default function PartnersMarquee() {
  return (
    <section className={styles.marqueeWrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...partners, ...partners].map((partner, idx) => (
            <span key={idx} className={styles.partner}>
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
