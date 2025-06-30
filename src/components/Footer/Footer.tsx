import styles from "./Footer.module.css";
import { footerInfo } from "./dataFooter.ts";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <p className={styles.address}>{footerInfo.address}</p>
          <div>
          <p className={styles.phone}>
            <a href={`tel:${footerInfo.phone}`} className={styles.link}>
              {footerInfo.phone}
            </a>
          </p>
          <p className={styles.email}>
            <a href={`mailto:${footerInfo.email}`} className={styles.link}>
              {footerInfo.email}
            </a>
          </p>
          </div>
        </div>

        <ul className={styles.socialList}>
          {footerInfo.socials.map(({ name, url, icon: Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconLink}
                aria-label={name}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <p>© {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
