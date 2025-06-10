import styles from './Button.module.css';

function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "medium",
  className = "",
  ...props 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  
  return (
    <button 
      className={buttonClass} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
