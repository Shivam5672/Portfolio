import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./EducationCard.module.css";

export const EducationCard = ({education : {startYear, endYear, course, cgpaPercentage, university}}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img src={getImageUrl("education/awardIcon.png")} alt="medalIcon" className={styles.image}></img>
        </div>
        <div className={styles.content}>
            <h4 className={styles.year}>{`${startYear} - ${endYear}`}</h4>
            <h2 className={styles.course}>{`${course} - ${cgpaPercentage}`}</h2>
            <h4 className={styles.university}>{university}</h4>
        </div>
    </div>
  );
};
