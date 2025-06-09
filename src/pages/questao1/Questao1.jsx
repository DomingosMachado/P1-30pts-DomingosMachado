import { useState, useEffect } from 'react';
import styles from './questao1.module.css';

function Questao1() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alterarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  useEffect(() => {
    if (temaEscuro) {
      document.body.className = styles.dark;
    } else {
      document.body.className = styles.light;
    }

    return () => {
      document.body.className = '';
    };
  }, [temaEscuro]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questão 1 - Alterar Tema</h1>      <button onClick={alterarTema} className={styles.button}>
        🪄 {temaEscuro ? 'Lumos' : 'Nox'}
      </button>      <p className={styles.description}>
        Lance o feitiço para mudar de tema! <br></br><br></br>Tema atual: {temaEscuro ? '🌙 Nox (Dark)' : '☀️ Lumos (Light)'}
      </p>
      <a href="/" className={styles.backLink}>←Home</a>
    </div>
  );
}

export default Questao1;
