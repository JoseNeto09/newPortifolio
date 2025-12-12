import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <img src={getImageUrl("nav/logo.png")} alt="Email icon" />
        <p>Gostou dos projetos?<p></p> entre em contato.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jos%C3%A9-lopes-sobrinho-neto-280648290/">
            José Lopes
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">lopesneto4395@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/JoseNeto09">github.com/JoseNeto09</a>
        </li>
      </ul>
    </footer>
  );
};
