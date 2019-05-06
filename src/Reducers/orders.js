import {
  GET_ORDERS,
} from '../Actions/types';

const defaultState = {
  orders: [],
  open: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        orders: action.payload,
      };
    default:
      return state;
  }
};
