import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import styles from './NewsCarousel.module.css';
import ingNew from '@/img/news/new.png';
import ingNew1 from '@/img/news/new1.avif';
import ingNew2 from '@/img/news/new2.jpeg';
const newsItems = [
    {
        title: 'День відкритих дверей ХАІ',
        description: 'Запрошуємо на зустріч з викладачами, екскурсії кампусом і презентацію спеціальностей!',
        image: ingNew,
    },
    {
        title: 'Календар подій для вступників',
        description: 'Дізнайтесь про всі важливі дати: подача заяв, іспити, результати.',
        image: ingNew1,
    },
    {
        title: 'Нові освітні програми',
        description: 'У 2025 році відкриваються сучасні спеціальності в ІТ та інженерії!',
        image: ingNew2,
    },
];
export default function NewsCarousel() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % newsItems.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: styles.carousel, children: [_jsx("h2", { className: styles.sectionTittle, children: "\u041D\u0430\u0448\u0456 \u043F\u043E\u0434\u0456\u0457" }), _jsx("div", { className: styles.slidesContainer, style: { transform: `translateX(-${index * 100}%)` }, children: newsItems.map(({ title, description, image }, i) => (_jsxs("div", { className: styles.card, children: [_jsx("img", { src: image, alt: title, className: styles.image }), _jsxs("div", { className: styles.textBox, children: [_jsx("h3", { className: styles.title, children: title }), _jsx("p", { className: styles.description, children: description })] })] }, i))) })] }));
}
