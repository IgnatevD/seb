import logoSeb from '@/img/logoSeb.png';
import Container from '@/components/Container';
import ThemeToggle from '@/components/ThemeToggle';
import styles from './Header.module.css';

const navLinks = [
  {
    label: 'Головна', href: '/',
  },
  {
    label: 'Вступ', href: '/vstup',
  },
  {
    label: 'Про нас', href: '/about',
  },
  {
    label: 'Контакти', href: '/contacts',
  },
];

type HeaderProps = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export default function Header({ menuOpen, toggleMenu, closeMenu }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      <Container>
        <header className={styles.header}>
          <div className={styles.logo}>
            <a key="/" href="/" onClick={closeMenu}>
              <img src={logoSeb} alt="SEB ХАІ логотип" />
            </a>
          </div>
          <div className={styles.navContainer}>
            <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
              {navLinks.map(({ label, href }) => (
                <a key={href} href={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </nav>
            <div className={styles.themeToggle}>
              <ThemeToggle />
            </div>
          </div>
          <button
            className={styles.burger}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.line} ${menuOpen ? styles.line1Active : ''}`} />
            <span className={`${styles.line} ${menuOpen ? styles.line2Active : ''}`} />
            <span className={`${styles.line} ${menuOpen ? styles.line3Active : ''}`} />
          </button>
        </header>
      </Container>
    </div>
  );
}
