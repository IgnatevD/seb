import styles from './Header.module.css';
import logoSeb from '../../img/logo_seb.png';
import Container from "../Container";
import { useMenu } from '../../context/MenuContext';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Вступ 2025', href: '/vstup2025' },
  { label: 'Про нас', href: '/#about' },
  { label: 'Контакти', href: '/#contacts' },
];

export default function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <div className={styles.wrapper}>
      <Container>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={logoSeb} alt="SEB ХАІ логотип" />
          </div>

          {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </nav>

          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.line} ${menuOpen ? styles.line1Active : ''}`}></span>
            <span className={`${styles.line} ${menuOpen ? styles.line2Active : ''}`}></span>
            <span className={`${styles.line} ${menuOpen ? styles.line3Active : ''}`}></span>
          </button>
        </header>
      </Container>
    </div>
  );
}
