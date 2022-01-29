import Card from '../../UI/Card';
import ButtonGroup from '../ButtonGroup';

import classes from './TodoItem.module.css';

const TodoItem = ({
  id, title, description, status,
}) => (
  <Card className={classes.todo}>
    <strong>{title}</strong>
    <p>{description}</p>
    <ButtonGroup id={id} status={status} />
  </Card>
);

export default TodoItem;
