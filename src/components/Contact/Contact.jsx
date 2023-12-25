import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:yyas404@gmail.com">yyas404@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://www.linkedin.com/in/yunus-karatt/" target="_blank">linkedin/Yunus</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/yunus-karatt" target="_blank">github.com/Yunus</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
