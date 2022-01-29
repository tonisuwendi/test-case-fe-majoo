const initialState = {
  isLoading: false,
  error: null,
  data: [],
  todoItem: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_DATA':
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    case 'SAVE_TODO':
      return {
        ...state,
        data: action.data,
        todoItem: null,
      };
    case 'TODO_ITEM':
      return {
        ...state,
        todoItem: state.data.find((item) => item.id === action.id),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
