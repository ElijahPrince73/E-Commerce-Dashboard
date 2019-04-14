import { GET_PRODUCTS, CREATE_PRODUCT } from '../Actions/types';

const defaultState = {
  products: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
};
