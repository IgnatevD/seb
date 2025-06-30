import { jsx as _jsx } from "react/jsx-runtime";
import styles from './ButtonSecondary.module.css';
const ButtonSecondary = ({ children, ...props }) => {
    return (_jsx("button", { className: styles.btnSecondary, ...props, children: children }));
};
export default ButtonSecondary;
