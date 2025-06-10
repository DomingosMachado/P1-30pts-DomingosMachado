import styles from './BackLink.module.css';

function BackLink({ to = "/", children = "← Home" }) {
  return (
    <a href={to} className={styles.backLink}>
      {children}
    </a>
  );
}

export default BackLink;
