const initialState = {
  showTodoForm: false,
  showModal: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TODO_FORM':
      return {
        ...state,
        showTodoForm: true,
        showModal: false,
      };
    case 'HIDE_TODO_FORM':
      return {
        ...state,
        showTodoForm: false,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        showModal: true,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
