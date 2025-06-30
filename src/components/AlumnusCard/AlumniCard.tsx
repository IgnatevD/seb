import React from 'react';
import styles from './AlumniCard.module.css';

interface AlumniCardProps {
  photoUrl: string;
  name: string;
  role: string;
  company: string;
}

export default function AlumniCard({photoUrl, name, role, company}: AlumniCardProps) {
  return (
    <div className={styles.alumniCard}>
      <img src={photoUrl} alt={name} className={styles.alumniPhoto}/>
      <div className={styles.alumniInfo}>
        <strong className={styles.alumniName}>{name}</strong>
        <p className={styles.alumniRole}>{role} у <em className={styles.alumniCompany}>{company}</em></p>
      </div>
    </div>
  );
}
