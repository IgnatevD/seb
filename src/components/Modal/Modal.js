import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
const Modal = ({ isOpen, onClose, title, content }) => {
    const [show, setShow] = useState(false);
    const [animateOpen, setAnimateOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setShow(true);
            const timer = setTimeout(() => setAnimateOpen(true), 100);
            return () => clearTimeout(timer);
        }
        else {
            setAnimateOpen(false);
            const timer = setTimeout(() => setShow(false), 900);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);
    if (!show)
        return null;
    return (_jsx("div", { className: `${styles.overlay} ${animateOpen ? styles.overlayVisible : ""}`, onClick: onClose, role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", "aria-hidden": !isOpen, children: _jsxs("div", { className: `${styles.modal} ${animateOpen ? styles.modalOpen : ""}`, onClick: (e) => e.stopPropagation(), tabIndex: -1, children: [_jsx("button", { className: styles.closeBtn, onClick: onClose, "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E", children: "\u00D7" }), _jsx("h2", { id: "modal-title", className: styles.modalTitle, children: title }), _jsx("div", { className: styles.modalContent, children: content })] }) }));
};
export default Modal;
