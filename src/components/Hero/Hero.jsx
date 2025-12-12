import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

// Componente de digitar -> selecionar -> apagar de uma vez
const TypingEffect = ({ text, speed = 50, eraseDelay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | selecting | erasing
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (phase === "typing") {
      if (index < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        }, speed);
      } else {
        timer = setTimeout(() => setPhase("selecting"), 800);
      }
    }

    if (phase === "selecting") {
      timer = setTimeout(() => {
        setPhase("erasing");
      }, eraseDelay);
    }

    if (phase === "erasing") {
      timer = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setPhase("typing");
      }, 300); // apaga de uma vez
    }

    return () => clearTimeout(timer);
  }, [index, phase, text, speed, eraseDelay]);

  return (
    <span
      className={`${styles.typingText} ${
        phase === "selecting" ? styles.selected : ""
      }`}
    >
      {displayedText}
      <span className={styles.cursor}></span>
    </span>
  );
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou José Lopes.</h1>
        <p className={styles.description}>
          <TypingEffect text="Sou desenvolvedor front-end com experiência em React, Next.js e Node.js, Bacharelado em Ciência da Computação pelo Centro Universitário de João Pessoa (UNIPÊ)." />
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
