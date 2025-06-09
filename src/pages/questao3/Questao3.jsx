import { useState } from 'react';
import styles from './questao3.module.css';

function Questao3() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Questão 3 - Lista de Tarefas</h1>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa..."
          className={styles.input}
        />
        <button onClick={adicionarTarefa} className={styles.button}>
          Adicionar
        </button>
      </div>

      <ul className={styles.taskList}>
        {tarefas.map((item, index) => (
          <li key={index} className={styles.taskItem}>
            {item}
          </li>
        ))}
      </ul>

      <a href="/" className={styles.backLink}>←Home</a>
    </div>
  );
}

export default Questao3;
