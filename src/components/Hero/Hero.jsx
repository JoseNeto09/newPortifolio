import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

// Componente de digitar/apagar
const TypingEffect = ({ text, speed = 130, eraseSpeed = 80, delay = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (index > 0) {
          setDisplayedText(text.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? eraseSpeed : speed);
    return () => clearTimeout(timer);
  }, [index, isDeleting, text, speed, eraseSpeed, delay]);

  return <span>{displayedText}</span>;
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou José Neto.</h1>

        <p className={styles.description}>
          <TypingEffect text="Sou desenvolvedor front-end com experiência em React Next.js e Node.js, Bacharelado em Ciência da Computação pelo Centro Universitário de João Pessoa (UNIPÊ)." />
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
