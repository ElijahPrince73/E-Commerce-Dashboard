import axios from 'axios';
import {
  GET_PRODUCTS, GET_PRODUCT, ERROR, CREATE_PRODUCT, CLOSE_NOTIFICATION,
} from './types';

const localToken = localStorage.getItem('token');

// Gets all products
export const getProducts = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/products`, {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

// Gets one product
export const getProduct = productId => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/product/${productId}`, {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_PRODUCT, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const updateProduct = (productId, values) => (dispatch) => {
  axios.put(`${process.env.REACT_APP_API_URL}/api/product/${productId}`, values, {
    headers: { 'x-auth': localToken },
  })
    .then(() => {
      dispatch({ type: CREATE_PRODUCT, payload: true });
    }).catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const deleteProducts = ids => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/products-delete`, { ids }, {
      headers: { 'x-auth': localToken },
    })
    .then(() => {
      dispatch(getProducts());
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const createProduct = values => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/products`, values, {
      headers: {
        'x-auth': localToken,
        'content-type': 'multipart/form-data',
      },
    })
    .then(() => {
      dispatch({ type: CREATE_PRODUCT, payload: true });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const closeNotification = () => (dispatch) => {
  dispatch({ type: CLOSE_NOTIFICATION, payload: false });
};
