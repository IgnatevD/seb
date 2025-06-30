import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Footer.module.css";
import { footerInfo } from "./dataFooter.ts";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsxs("footer", { className: styles.footer, children: [_jsxs("div", { className: styles.container, children: [_jsxs("div", { className: styles.contactInfo, children: [_jsx("p", { className: styles.address, children: footerInfo.address }), _jsxs("div", { children: [_jsx("p", { className: styles.phone, children: _jsx("a", { href: `tel:${footerInfo.phone}`, className: styles.link, children: footerInfo.phone }) }), _jsx("p", { className: styles.email, children: _jsx("a", { href: `mailto:${footerInfo.email}`, className: styles.link, children: footerInfo.email }) })] })] }), _jsx("ul", { className: styles.socialList, children: footerInfo.socials.map(({ name, url, icon: Icon }) => (_jsx("li", { children: _jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: styles.socialIconLink, "aria-label": name, children: _jsx(Icon, {}) }) }, name))) })] }), _jsx("div", { className: styles.footerBottom, children: _jsxs("p", { children: ["\u00A9 ", currentYear] }) })] }));
};
export default Footer;
