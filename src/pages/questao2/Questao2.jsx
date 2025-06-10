import { PageContainer, Button, BackLink } from '../../components';
import { useGreeting } from '../../hooks/useGreeting';
import styles from './questao2.module.css';

function Questao2() {
  const { mensagem, alternarMensagem, resetarMensagem, isWelcome } = useGreeting();

  return (
    <PageContainer>
      <h1 className={styles.title}>Questão 2 - Mensagem de Boas-Vindas</h1>
      <p className={styles.message}>{mensagem}</p>
      <div className={styles.buttonGroup}>
        <Button 
          onClick={alternarMensagem} 
          variant={isWelcome ? "primary" : "success"}
          size="medium"
        >
          {isWelcome ? 'Resetar' : 'Entrar'}
        </Button>
      </div>
      <BackLink />
    </PageContainer>
  );
}

export default Questao2;
