import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './Header.module.css';
import logoSeb from '@/img/logo_seb.png';
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
    return (_jsx("div", { className: styles.wrapper, children: _jsx(Container, { children: _jsxs("header", { className: styles.header, children: [_jsx("div", { className: styles.logo, children: _jsx("img", { src: logoSeb, alt: "SEB \u0425\u0410\u0406 \u043B\u043E\u0433\u043E\u0442\u0438\u043F" }) }), menuOpen && _jsx("div", { className: styles.overlay, onClick: closeMenu }), _jsx("nav", { className: `${styles.nav} ${menuOpen ? styles.open : ''}`, children: navLinks.map(({ label, href }) => (_jsx("a", { href: href, onClick: closeMenu, children: label }, href))) }), _jsxs("button", { className: styles.burger, onClick: toggleMenu, "aria-label": menuOpen ? "Закрыть меню" : "Открыть меню", "aria-expanded": menuOpen, children: [_jsx("span", { className: `${styles.line} ${menuOpen ? styles.line1Active : ''}` }), _jsx("span", { className: `${styles.line} ${menuOpen ? styles.line2Active : ''}` }), _jsx("span", { className: `${styles.line} ${menuOpen ? styles.line3Active : ''}` })] })] }) }) }));
}
