import React from "react";
import styles from "./lerolero.module.css";

class Lerolero extends React.Component {
  state = {
    frase:
      "Nunca deixe ninguém te dizer que não consegue. Diga você mesmo: Não consigo!"
  };
  handleClick = () => {
    const id = Math.ceil(Math.random() * 45);

    fetch(`http://localhost:3001/coach/${id}`).then(res => {
      res.json().then(data => {
        this.setState({ frase: data.frase });
      });
    });
  };
  render() {
    const { frase } = this.state;
    return (
      <article className={styles.container} onClick={this.handleClick}>
        <blockquote>{frase}</blockquote>
      </article>
    );
  }
}

export default Lerolero;
