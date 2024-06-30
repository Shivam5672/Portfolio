import React from "react";
import educations from "../../data/education.json";
import styles from "./Education.module.css";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div>
        {
          educations.map(
            (education, id) => {
              return <EducationCard education = {education} key={id}/>
            }
          )
        }
      </div>
    </section>
  );
};
