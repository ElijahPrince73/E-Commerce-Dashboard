import { GET_PRODUCTS } from '../Actions/types';

const defaultState = {
  products: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};
