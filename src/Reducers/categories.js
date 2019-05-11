import {
  GET_CATEGORIES,
  CREATE_CATEGORIES,
  CLOSE_NOTIFICATION,
} from '../Actions/types';

const defaultState = {
  categories: [],
  open: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.payload || state.categories,
      };
    case CREATE_CATEGORIES:
      return {
        open: action.payload,
      };
    case CLOSE_NOTIFICATION:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
};
