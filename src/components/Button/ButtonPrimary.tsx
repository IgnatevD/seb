import React from 'react';
import styles from './ButtonPrimary.module.css';

type ButtonPrimaryProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, ...props }) => {
  return (
    <button className={styles.btnPrimary} {...props}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
