import { useSelector } from 'react-redux';

import useFormatDate from '../../hooks/use-formatdate';
import ButtonGroup from '../ButtonGroup';

import classes from './DetailTask.module.css';

const DetailTask = () => {
  const todoState = useSelector((state) => state.todo);
  const { todoItem } = todoState;
  const formatDate = useFormatDate(Date.parse(todoItem.createdAt));
  return (
    <>
      <h3>Detail Task</h3>
      <table className={classes.table}>
        <tbody>
          <tr>
            <th>Title</th>
            <td>{todoItem.title}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{todoItem.description}</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>{todoItem.status ? 'Finished' : 'Unfinished'}</td>
          </tr>
          <tr>
            <th>Created At</th>
            <td>{formatDate}</td>
          </tr>
        </tbody>
      </table>
      <ButtonGroup id={todoItem.id} status={todoItem.status} isDetail />
    </>
  );
};

export default DetailTask;
