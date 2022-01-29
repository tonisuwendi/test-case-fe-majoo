import { useCallback, useReducer } from 'react';
import axios from 'axios';

const ENDPOINT_API = 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list';

const initialState = {
  isLoading: true,
  error: null,
  responseData: [],
};

const httpReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'SUCCESS':
      return {
        isLoading: false,
        error: null,
        responseData: action.data,
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(async () => {
    dispatch({ type: 'FETCH' });
    try {
      const response = await axios.get(ENDPOINT_API);
      if (response.status !== 200) {
        throw new Error('Something went wrong. Please try again!');
      }
      dispatch({ type: 'SUCCESS', data: response.data });
    } catch (error) {
      dispatch({ type: 'ERROR', error: error.message });
    }
  }, []);

  return {
    sendRequest,
    isLoading: httpState.isLoading,
    error: httpState.error,
    data: httpState.responseData,
  };
};

export default useHttp;
