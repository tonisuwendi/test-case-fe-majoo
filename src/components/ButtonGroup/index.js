import { useDispatch } from 'react-redux';

import Button from '../../UI/Button';

import classes from './ButtonGroup.module.css';

const ButtonGroup = ({ id, status, isDetail = false }) => {
  const dispatch = useDispatch();
  const removeTodoHandler = () => {
    const confirm = window.confirm('Are you sure you want to delete this task?');
    if (!confirm) {
      return;
    }
    dispatch({ type: 'REMOVE_TODO', id });
  };
  const updateTodoHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch({ type: 'TODO_ITEM', id });
    dispatch({ type: 'SHOW_TODO_FORM' });
  };
  const showDetailHandler = () => {
    dispatch({ type: 'HIDE_TODO_FORM' });
    dispatch({ type: 'SHOW_MODAL' });
    dispatch({ type: 'TODO_ITEM', id });
  };
  return (
    <div className={classes['button-group']}>
      <Button
        title="Update"
        size="sm"
        onClick={updateTodoHandler}
      />
      {!status && (
        <Button
          title="Delete"
          variant="danger"
          size="sm"
          onClick={removeTodoHandler}
        />
      )}
      {!isDetail && (
        <Button
          title="Detail"
          variant="success"
          size="sm"
          onClick={showDetailHandler}
        />
      )}
    </div>
  );
};

export default ButtonGroup;
