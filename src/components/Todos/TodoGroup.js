import TodoItem from './TodoItem';

import classes from './TodoList.module.css';

const TodoGroup = ({
  title, todos, sortAsc,
}) => {
  const todosSorted = todos.sort((a, b) => (
    sortAsc
      ? Date.parse(a.createdAt) - Date.parse(b.createdAt)
      : Date.parse(b.createdAt) - Date.parse(a.createdAt)
  ));
  return (
    <div className={classes.group}>
      <p className={classes.title}>{title}</p>
      {
        todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            status={todo.status}
          />
        ))
      }
    </div>
  );
};

export default TodoGroup;
