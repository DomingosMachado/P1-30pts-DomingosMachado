import { Button } from '../index';
import styles from './TaskItem.module.css';

function TaskItem({ tarefa, onToggle, onDelete }) {
  return (
    <li className={`${styles.taskItem} ${tarefa.concluida ? styles.taskConcluida : ''}`}>
      <div className={styles.taskContent}>
        <span className={`${styles.taskText} ${tarefa.concluida ? styles.textConcluido : ''}`}>
          {tarefa.texto}
        </span>
        <div className={styles.taskButtons}>
          <Button 
            onClick={() => onToggle(tarefa.id)}
            variant={tarefa.concluida ? "secondary" : "success"}
            size="small"
          >
            {tarefa.concluida ? '↶' : '✓'}
          </Button>
          <Button 
            onClick={() => onDelete(tarefa.id)}
            variant="danger"
            size="small"
          >
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
