import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './SpecialtyCard.module.css';
export default function SpecialtyCard({ title, code, features = [], description, onSelect = () => {
}, }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
        }
    };
    const handleButtonClick = (e) => {
        e.stopPropagation();
        onSelect();
    };
    return (_jsxs("div", { onClick: onSelect, className: styles.card, role: "button", tabIndex: 0, onKeyDown: handleKeyDown, children: [_jsxs("div", { className: styles.header, children: [_jsx("h3", { className: styles.title, children: title }), _jsx("span", { className: styles.code, children: code })] }), _jsx("ul", { className: styles.features, children: features.map((feat, idx) => (_jsx("li", { className: styles.featureItem, children: feat }, idx))) }), _jsx("p", { className: styles.description, children: description }), _jsx("button", { onClick: handleButtonClick, className: styles.selectButton, type: "button", children: "\u041E\u0431\u0440\u0430\u0442\u0438 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C" })] }));
}
