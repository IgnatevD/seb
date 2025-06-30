import React from "react";
import styles from "./CareerCard.module.css";
import WorkIcon from "@mui/icons-material/Work";
import PaidIcon from "@mui/icons-material/Paid";
import DescriptionIcon from "@mui/icons-material/Description";

type Career = {
  title: string;
  salary: string;
  description: string;
};

interface Props {
  career: Career;
}

const CareerCard: React.FC<Props> = ({career}) => {
  return (
    <div className={styles.careerCard}>
      <div className={styles.iconRow}>
        <WorkIcon className={styles.icon}/>
        <h3 className={styles.careerTitle}>{career.title}</h3>
      </div>
      <div className={styles.iconRow}>
        <PaidIcon className={styles.icon}/>
        <p className={styles.salary}>{career.salary}</p>
      </div>
      <div className={styles.iconRow}>
        <DescriptionIcon className={styles.icon}/>
        <p className={styles.description}>{career.description}</p>
      </div>
    </div>
  );
};

export default CareerCard;
