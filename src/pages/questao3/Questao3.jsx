import { useState, useEffect } from 'react';
import { PageContainer, Button, BackLink } from '../../components';
import styles from './questao3.module.css';

function Questao3() {
  const [tarefa, setTarefa] = useState('');  const [tarefas, setTarefas] = useState([]);

  // Carregar tarefas do localStorage ao montar o componente
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Salvar tarefas no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      const novaTarefa = {
        id: Date.now(),
        texto: tarefa,
        concluida: false
      };
      setTarefas([...tarefas, novaTarefa]);
      setTarefa('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      adicionarTarefa();
    }
  };

  const toggleConcluida = (id) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  };

  const apagarTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <PageContainer>
      <h1 className={styles.title}>Questão 3 - Lista de Tarefas</h1>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite uma tarefa..."
          className={styles.input}
        />
        <Button 
          onClick={adicionarTarefa} 
          variant="warning"
          size="medium"
        >
          Adicionar
        </Button>
      </div>

      <ul className={styles.taskList}>
        {tarefas.map((item) => (
          <li key={item.id} className={`${styles.taskItem} ${item.concluida ? styles.taskConcluida : ''}`}>
            <div className={styles.taskContent}>
              <span className={`${styles.taskText} ${item.concluida ? styles.textConcluido : ''}`}>
                {item.texto}
              </span>
              <div className={styles.taskButtons}>
                <Button 
                  onClick={() => toggleConcluida(item.id)}
                  variant={item.concluida ? "secondary" : "success"}
                  size="small"
                  className={styles.btnToggle}
                >
                  {item.concluida ? '↶' : '✓'}
                </Button>
                <Button 
                  onClick={() => apagarTarefa(item.id)}
                  variant="danger"
                  size="small"
                >
                  🗑️
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <BackLink />
    </PageContainer>
  );
}

export default Questao3;
