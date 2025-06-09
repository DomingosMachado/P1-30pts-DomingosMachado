import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Exercício React</h1>
      <p className={styles.subtitle}>Bem-vindo! Escolha uma das questões abaixo:</p>
      
      <div className={styles.linksContainer}>        <a href="/questao1" className={`${styles.link} ${styles.linkBlue}`}>
          Questão 1 - Tema Claro/Escuro
        </a>
        
        <a href="/questao2" className={`${styles.link} ${styles.linkGreen}`}>
          Questão 2 - Mensagem de Boas-Vindas
        </a>
        
        <a href="/questao3" className={`${styles.link} ${styles.linkYellow}`}>
          Questão 3 - Lista de Tarefas
        </a>
      </div>
    </div>
  );
}

export default Home;
