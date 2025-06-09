import { useState } from 'react';
import styles from './questao2.module.css';

function Questao2() {
  const [mensagem, setMensagem] = useState('Olá!');

  const mudarTexto = () => {
    setMensagem('Bem-vindo!');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questão 2 - Mensagem de Boas-Vindas</h1>
      <p className={styles.message}>{mensagem}</p>
      <button onClick={mudarTexto} className={styles.button}>
        Entrar
      </button>
      <br />
      <a href="/" className={styles.backLink}>←Home</a>
    </div>
  );
}

export default Questao2;
