import styles from './Button.module.css';

const Button = ({
  title,
  size = 'md',
  variant = 'primary',
  type,
  onClick,
}) => (
  <button
    className={`${styles.button} ${styles[`button-${size}`]} ${
      styles[variant]
    }`}
    onClick={onClick}
    type={type === 'submit' ? 'submit' : 'button'}
  >
    {title}
  </button>
);

export default Button;
