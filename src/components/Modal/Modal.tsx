import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  const [show, setShow] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(() => setAnimateOpen(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateOpen(false);
      const timer = setTimeout(() => setShow(false), 900);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`${styles.overlay} ${animateOpen ? styles.overlayVisible : ""}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
    >
      <div
        className={`${styles.modal} ${animateOpen ? styles.modalOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          &times;
        </button>
        <h2 id="modal-title" className={styles.modalTitle}>
          {title}
        </h2>
        <div className={styles.modalContent}>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
