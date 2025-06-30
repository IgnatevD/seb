import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from './StaffCard.module.css';
export default function StaffCard({ photoUrl, name, role }) {
    return (_jsxs("div", { className: styles.staffCard, children: [_jsx("img", { src: photoUrl, alt: name, className: styles.photo }), _jsxs("div", { className: styles.overlay, children: [_jsx("p", { className: styles.name, children: name }), _jsx("p", { className: styles.role, children: role })] })] }));
}
