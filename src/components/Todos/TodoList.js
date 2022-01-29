import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../UI/Card';
import TodoGroup from './TodoGroup';

import classes from './TodoList.module.css';

const TodoList = () => {
  const [todoUnFinish, setTodoUnFinish] = useState([]);
  const [todoFinish, setTodoFinish] = useState([]);
  const todos = useSelector((state) => state.todo);
  const { isLoading, error, data: dataTodos } = todos;
  useEffect(() => {
    const finish = dataTodos.filter((todo) => todo.status === 0);
    const unfinish = dataTodos.filter((todo) => todo.status === 1);
    setTodoUnFinish(finish);
    setTodoFinish(unfinish);
  }, [dataTodos]);
  let contentWrapper;
  if (isLoading) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>Loading...</p>
      </Card>
    );
  }
  if (!isLoading && error) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>{error}</p>
      </Card>
    );
  }
  if (!isLoading && !error && dataTodos.length === 0) {
    contentWrapper = (
      <Card className={classes.info}>
        <p>Data not found. Please add new task.</p>
      </Card>
    );
  }
  if (!isLoading && !error && dataTodos.length > 0) {
    const showAllTodos = todoFinish.length > 0 && todoUnFinish.length > 0;
    contentWrapper = (
      <div className={`${classes.todos} ${showAllTodos ? classes.todosColumn : ''}`}>
        {todoUnFinish.length > 0 && <TodoGroup title="Unfinished" todos={todoUnFinish} sortAsc />}
        {todoFinish.length > 0 && <TodoGroup title="Finished" todos={todoFinish} />}
      </div>
    );
  }
  return (
    <>
      <h3 className={classes.title}>Task To Do List</h3>
      <div className={classes.underline} />
      {contentWrapper}
    </>
  );
};

export default TodoList;
