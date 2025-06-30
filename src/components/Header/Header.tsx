import logoSeb from '@/img/logoSeb.png';
import Container from "@/components/Container";
import styles from './Header.module.css';

const navLinks = [
  { label: 'Головна', href: '/' },
  { label: 'Вступ 2025', href: '/vstup2025' },
  { label: 'Про нас', href: '/#about' },
  { label: 'Контакти', href: '/#contacts' },
];

type HeaderProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export default function Header({ menuOpen, toggleMenu, closeMenu }: HeaderProps)  {
  return (
    <div className={styles.wrapper}>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <Container>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src={logoSeb} alt="SEB ХАІ логотип" />
          </div>
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
