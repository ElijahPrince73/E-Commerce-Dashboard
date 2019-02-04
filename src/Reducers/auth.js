import { LOGIN_USER } from '../Actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
