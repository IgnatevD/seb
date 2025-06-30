import { jsx as _jsx } from "react/jsx-runtime";
import styles from './ButtonPrimary.module.css';
const ButtonPrimary = ({ children, ...props }) => {
    return (_jsx("button", { className: styles.btnPrimary, ...props, children: children }));
};
export default ButtonPrimary;
