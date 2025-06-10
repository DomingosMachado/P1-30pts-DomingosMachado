import { useState } from 'react';

export function useGreeting() {
  const [mensagem, setMensagem] = useState('Olá!');

  const alternarMensagem = () => {
    setMensagem(prevMensagem => 
      prevMensagem === 'Olá!' ? 'Bem-vindo!' : 'Olá!'
    );
  };


  return {
    mensagem,
    alternarMensagem,    
    isWelcome: mensagem === 'Bem-vindo!'
  };
}
