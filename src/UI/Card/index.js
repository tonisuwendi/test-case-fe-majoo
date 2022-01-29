import classes from './Card.module.css';

const Card = ({ children, className = '' }) => (
  <div className={`${classes.card} ${className}`}>{children}</div>
);

export default Card;
