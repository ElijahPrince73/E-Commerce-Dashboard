import axios from 'axios';
import {
  GET_CATEGORIES, ERROR, CREATE_CATEGORIES, CLOSE_NOTIFICATION,
} from './types';

const localToken = localStorage.getItem('token');

export const getCategories = () => (dispatch) => {
  axios
    .get('http://localhost:5000/api/categories', {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_CATEGORIES, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const deleteCategories = ids => (dispatch) => {
  axios
    .post('http://localhost:5000/api/categories-delete', { ids }, {
      headers: { 'x-auth': localToken },
    })
    .then(() => {
      dispatch(getCategories());
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const createCategory = values => (dispatch) => {
  axios
    .post('http://localhost:5000/api/categories', values, {
      headers: {
        'x-auth': localToken,
      },
    })
    .then(() => {
      dispatch({ type: CREATE_CATEGORIES, payload: true });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const closeNotification = () => (dispatch) => {
  dispatch({ type: CLOSE_NOTIFICATION, payload: false });
};
