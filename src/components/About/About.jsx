import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Sou desenvolvedor frontend com experiência na criação de sites
                responsivos, modernos e otimizados para diferentes dispositivos.
                Possuo domínio em React, Next.js, integração com APIs REST,
                estilização com Tailwind CSS e uso de metodologias ágeis. Tenho
                foco em performance, escalabilidade e experiência do usuário.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Tenho experiência no desenvolvimento de sistemas back-end
                rápidos e otimizados, além de APIs, possuindo boa noção das
                tecnologias envolvidas e capacidade para utilizá-las na prática,
                realizando integrações e implementações simples quando
                necessário.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Já projetei diversas landing pages e desenvolvi sistemas de
                design completos, criando interfaces consistentes, funcionais e
                alinhadas às necessidades do usuário.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
