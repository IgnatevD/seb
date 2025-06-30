import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './FacultyDescription.module.css';
import { facultyInfo } from '../aboutData.ts';
export default function FacultyDescription() {
    const { title, intro, directionsTitle, directions, benefitsTitle, benefits, conclusion } = facultyInfo?.description;
    return (_jsxs("section", { className: styles.container, children: [_jsxs("p", { className: styles.paragraph, children: [_jsx("span", { children: title }), _jsx("span", { children: intro.text })] }), _jsxs("div", { className: styles.block, children: [_jsx("h3", { className: styles.subheading, children: directionsTitle }), _jsx("ul", { className: styles.list, children: directions.map((item, i) => (_jsx("li", { children: item }, `direction-${i}`))) })] }), _jsxs("div", { className: styles.block, children: [_jsx("h3", { className: styles.subheading, children: benefitsTitle }), _jsx("ul", { className: styles.list, children: benefits.map((item, i) => (_jsx("li", { children: item }, `benefit-${i}`))) })] }), _jsx("p", { className: styles.conclusion, children: conclusion })] }));
}
