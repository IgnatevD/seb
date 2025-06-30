import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Container.module.css';
const Container = ({ children }) => {
    return _jsx("div", { className: styles.container, children: children });
};
export default Container;
