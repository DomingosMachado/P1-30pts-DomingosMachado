import { useState } from 'react';
import { PageContainer, Button, BackLink } from '../../components';
import styles from './questao2.module.css';

function Questao2() {
  const [mensagem, setMensagem] = useState('Olá!');

  const mudarTexto = () => {
    setMensagem('Bem-vindo!');
  };

  return (
    <PageContainer>
      <h1 className={styles.title}>Questão 2 - Mensagem de Boas-Vindas</h1>
      <p className={styles.message}>{mensagem}</p>
      <Button 
        onClick={mudarTexto} 
        variant="success"
        size="medium"
      >
        Entrar
      </Button>
      <BackLink />
    </PageContainer>
  );
}

export default Questao2;
