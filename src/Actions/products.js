import axios from 'axios';
import { GET_PRODUCTS, ERROR } from './types';

const localToken = localStorage.getItem('token');

export const getProducts = () => (dispatch) => {
  axios
    .get('http://localhost:5000/api/products', {
      headers: { 'x-auth': localToken },
    })
    .then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};
