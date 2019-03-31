import { GET_USER } from '../Actions/types';

const defaultState = {
  user: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
