import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typed from 'typed.js';

export const Hero = () => {

    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['FrontEnd Developer', 'Backend Developer', 'Software Developer'],
        typeSpeed: 30,
        loop: true,
        loopCount: Infinity,
      });
  
      return () => {
        typed.destroy();
      };

    }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivam</h1>
        <p className={styles.description}>
          <div>I am a <span ref={el}></span></div>
          <span>Reach out if you'd like to learn more!</span>
        </p>
        <div className={styles.Btn}>
          <a
            className={styles.contactBtn}
            href="mailto:shivambansal.ind@gmail.com"
          >
            Contact Me
          </a>
          <a
            className={styles.contactBtn}
            href="https://drive.google.com/file/d/1cxNfqOKYTtxJVNNdK5BQMQwIvZgNokub/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero"
      ></img>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};