import React from 'react';
import styles from './ButtonSecondary.module.css';

type ButtonSecondaryProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ children, ...props }) => {
  return (
    <button className={styles.btnSecondary} {...props}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
