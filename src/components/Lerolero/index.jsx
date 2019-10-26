import React from "react";
import styles from "./lerolero.module.css";

const Lerolero = () => {
  const handleClick = () => {
    console.log("CLICOU");
  };
  return (
    <article className={styles.container} onClick={handleClick}>
      <blockquote>
        Nunca deixe ninguém te dizer que não consegue. Diga você mesmo: Não
        consigo!
      </blockquote>
    </article>
  );
};

export default Lerolero;
