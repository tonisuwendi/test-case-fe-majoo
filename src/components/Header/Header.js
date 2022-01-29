import { useDispatch } from 'react-redux';

import Button from '../../UI/Button';

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const showTodoForm = () => {
    dispatch({ type: 'SHOW_TODO_FORM' });
    dispatch({ type: 'TODO_ITEM' });
  };
  return (
    <header className={classes.header}>
      <h2>MyTodoApp</h2>
      <Button
        title="Add New Task"
        variant="outline"
        onClick={showTodoForm}
      />
    </header>
  );
};

export default Header;
