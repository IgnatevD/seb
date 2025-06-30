import styles from './StaffCard.module.css';

interface StaffCardProps {
  photoUrl: any;
  name: string;
  role: string;
}

export default function StaffCard({ photoUrl, name, role }: StaffCardProps) {
  return (
    <div className={styles.staffCard}>
      <img src={photoUrl} alt={name} className={styles.photo} />
      <div className={styles.overlay}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}
