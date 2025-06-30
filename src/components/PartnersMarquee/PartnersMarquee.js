import { jsx as _jsx } from "react/jsx-runtime";
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
    return (_jsx("section", { className: styles.marqueeWrapper, children: _jsx("div", { className: styles.marquee, children: _jsx("div", { className: styles.track, children: [...partners, ...partners].map((partner, idx) => (_jsx("span", { className: styles.partner, children: partner }, idx))) }) }) }));
}
