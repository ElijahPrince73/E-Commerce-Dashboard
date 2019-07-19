import axios from 'axios';
import {
  GET_CATEGORIES,
  GET_CATEGORY,
  ERROR,
  CREATE_CATEGORIES,
  CLOSE_NOTIFICATION,
} from './types';

const localToken = localStorage.getItem('token');

export const getCategories = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/categories`, {
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

export const getCategory = categoryId => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/categories/${categoryId}`, {
      headers: { 'x-auth': localToken },
      params: { access: 'admin' },
    })
    .then((res) => {
      dispatch({ type: GET_CATEGORY, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const deleteCategories = ids => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/categories-delete`, { ids }, {
      headers: { 'x-auth': localToken },
    })
    .then(() => {
      dispatch(getCategories());
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const updateCategory = (categoryId, values) => (dispatch) => {
  axios.put(`${process.env.REACT_APP_API_URL}/api/categories/${categoryId}`, values, {
    headers: { 'x-auth': localToken },
  })
    .then(() => {
      dispatch({ type: CREATE_CATEGORIES, payload: true });
      dispatch(getCategory(categoryId));
    }).catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const createCategory = values => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/categories`, values, {
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
