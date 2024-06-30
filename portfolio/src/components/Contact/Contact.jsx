import React from 'react';
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>  
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='emailIcon'></img>
                <a href="mailto:shivambansal.ind@gmail.com">gmail</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='linkedinIcon'></img>
                <a href="https://www.linkedin.com/in/shivam-bansal-341374232/" target='_blank'>linkedin</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='githubIcon'></img>
                <a href="https://github.com/Shivam5672" target='_blank'>github</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/leetcodeIcon.png")} alt='githubIcon' className={styles.leetcode}></img>
                <a href="https://leetcode.com/u/Shiv_as_Shivam/" target='_blank'>leetcode</a>
            </li>
        </ul>
    </footer>
  )
}
