import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { facultyInfo } from './heroData';
import PartnersMarquee from "../../../components/PartnersMarquee";
export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const currentMessage = facultyInfo.motivationMessages[currentIndex];
        let timeout;
        if (!isDeleting && displayedText.length < currentMessage.length) {
            timeout = setTimeout(() => {
                setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
            }, 80);
        }
        else if (!isDeleting && displayedText === currentMessage) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2400);
        }
        else if (isDeleting && displayedText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
            }, 40);
        }
        else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % facultyInfo.motivationMessages.length);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex]);
    return (_jsxs("section", { id: "home", className: `${styles.hero} glass`, children: [_jsx("h1", { className: styles.title, children: facultyInfo.facultyName.map((line, index) => (_jsx("span", { children: index === 0 ? (_jsxs(_Fragment, { children: [line, _jsx("br", {})] })) : (line) }, index))) }), _jsx("p", { className: styles.subtitle, children: facultyInfo.subtitleLines }), _jsx("p", { className: styles.motivation, children: _jsxs("span", { className: styles.message, children: [displayedText, _jsx("span", { className: styles.cursor, children: "|" })] }) }), _jsx("div", { className: styles.stats, children: facultyInfo.stats.map((item, index) => (_jsxs("div", { className: styles.statItem, children: [_jsx("span", { className: styles.statNumber, children: item.number }), _jsx("span", { className: styles.statLabel, children: item.label })] }, index))) }), _jsx(PartnersMarquee, {})] }));
}
