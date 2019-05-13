import { GET_ORDERS, GET_ORDER } from '../Actions/types';

const defaultState = {
  orders: [],
  order: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        orders: action.payload,
      };
    case GET_ORDER:
      return {
        order: action.payload,
      };
    default:
      return state;
  }
};
