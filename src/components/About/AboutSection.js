import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { facultyInfo } from './aboutData';
import styles from './AboutSection.module.css';
import StaffCard from '../StaffCard/StaffCard';
import FacultyDescription from './FacultyDescription';
export default function AboutSection() {
    return (_jsxs("section", { id: "about", className: styles.aboutSection, children: [_jsx("h2", { className: styles.heading, children: facultyInfo.sectionTitle }), _jsx("article", { className: styles.text, children: _jsx(FacultyDescription, {}) }), _jsx("h3", { className: styles.subheading, children: facultyInfo.deanateTitle }), _jsx("div", { className: styles.staffGrid, children: facultyInfo.deanate.map((m) => (_jsx(StaffCard, { photoUrl: m.photoUrl, name: m.name, role: m.role }, m.name))) }), _jsx("h3", { className: styles.subheading, children: facultyInfo.departmentsTitle }), _jsx("div", { className: styles.staffGrid, children: facultyInfo.departments.map((m) => (_jsx(StaffCard, { photoUrl: m.photoUrl, name: m.name, role: m.role }, m.name))) })] }));
}
