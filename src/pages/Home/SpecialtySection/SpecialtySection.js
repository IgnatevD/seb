import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SpecialtyCard from '../../../components/SpecialtyCard';
import styles from './SpecialtySection.module.css';
import { specialtiesByLevel, specialtiesIntro, educationLevels, } from './specialtiesData';
export default function SpecialtySection() {
    const [selectedLevel, setSelectedLevel] = useState('Бакалавр');
    const handleSelect = (title) => {
        window.location.href = `/specialty/${encodeURIComponent(title)}`;
    };
    const specialties = specialtiesByLevel[selectedLevel] ?? [];
    return (_jsxs("section", { className: styles.section, children: [_jsxs("div", { className: styles.header, children: [_jsx("h2", { className: styles.titleSpecialties, children: specialtiesIntro.title }), _jsx("p", { className: styles.subtitle, children: specialtiesIntro.subtitle }), _jsx("div", { className: styles.levelSelector, children: educationLevels.map((level) => (_jsx("button", { onClick: () => setSelectedLevel(level), className: level === selectedLevel ? styles.activeLevelButton : styles.levelButton, children: level }, level))) })] }), _jsx("div", { className: styles.cardsContainer, children: specialties.length > 0 ? (specialties.map(({ title, code, features, description }) => (_jsx(SpecialtyCard, { title: title, code: code, features: features, description: description, onSelect: () => handleSelect(code) }, code)))) : (_jsx("p", { className: styles.noSpecialties, children: "\u041D\u0435\u043C\u0430\u0454 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0435\u0439 \u0434\u043B\u044F \u0446\u044C\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F \u043E\u0441\u0432\u0456\u0442\u0438." })) })] }));
}
