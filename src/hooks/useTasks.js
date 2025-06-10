import { useState, useEffect } from 'react';

export function useTasks() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    if (tarefas.length > 0) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      const novaTarefa = {
        id: Date.now(),
        texto: tarefa,
        concluida: false
      };
      setTarefas(prev => [...prev, novaTarefa]);
      setTarefa('');
    }
  };

  const toggleConcluida = (id) => {
    setTarefas(prev => prev.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  };

  const apagarTarefa = (id) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  };

  return {
    tarefa,
    setTarefa,
    tarefas,
    adicionarTarefa,
    toggleConcluida,
    apagarTarefa
  };
}
