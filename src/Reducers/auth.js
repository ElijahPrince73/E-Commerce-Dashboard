import { GET_USER, LOADING, ERROR } from '../Actions/types';

const defaultState = {
  loading: false,
  error: false,
  user: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
      };
    case GET_USER:
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case ERROR:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
