import axios from 'axios';
import { GET_ORDERS, ERROR } from './types';

const localToken = localStorage.getItem('token');

export const getOrders = () => (dispatch) => {
  axios
    .get('http://localhost:5000/api/orders', {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_ORDERS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};
