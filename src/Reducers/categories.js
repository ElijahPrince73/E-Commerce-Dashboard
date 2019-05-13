import {
  GET_CATEGORIES,
  GET_CATEGORY,
  CREATE_CATEGORIES,
  CLOSE_NOTIFICATION,
} from '../Actions/types';

const defaultState = {
  categories: [],
  category: { categoryName: '', categoryDescription: '' },
  open: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        categories: action.payload,
      };
    case GET_CATEGORY:
      return {
        category: action.payload,
        open: state.open,
      };
    case CREATE_CATEGORIES:
      return {
        open: action.payload,
        category: state.category,
      };
    case CLOSE_NOTIFICATION:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
};
