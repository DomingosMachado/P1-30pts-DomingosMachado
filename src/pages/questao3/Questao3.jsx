import { PageContainer, Button, BackLink, TaskItem } from '../../components';
import { useTasks } from '../../hooks/useTasks';
import styles from './questao3.module.css';

function Questao3() {
  const { tarefa, setTarefa, tarefas, adicionarTarefa, toggleConcluida, apagarTarefa } = useTasks();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') adicionarTarefa();
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
        <Button onClick={adicionarTarefa} variant="warning" size="medium">
          Adicionar
        </Button>
      </div>

      <ul className={styles.taskList}>
        {tarefas.map((item) => (
          <TaskItem 
            key={item.id}
            tarefa={item}
            onToggle={toggleConcluida}
            onDelete={apagarTarefa}
          />
        ))}
      </ul>

      <BackLink />
    </PageContainer>
  );
}

export default Questao3;
