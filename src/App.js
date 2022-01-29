import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import ModalDetail from './components/ModalDetail';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import useHttp from './hooks/use-http';

const App = () => {
  const dispatch = useDispatch();
  const uiState = useSelector((state) => state.ui);
  const {
    sendRequest,
    isLoading,
    error,
    data,
  } = useHttp();
  useEffect(() => {
    sendRequest();
  }, []);
  useEffect(() => {
    dispatch({
      type: 'GET_LIST_DATA',
      isLoading,
      error,
      data,
    });
  }, [isLoading, error, data]);
  return (
    <>
      <Header />
      {uiState.showModal && <ModalDetail />}
      <main>
        {uiState.showTodoForm && <TodoForm />}
        <TodoList />
      </main>
    </>
  );
};

export default App;
