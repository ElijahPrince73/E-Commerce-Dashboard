import axios from 'axios';
import { GET_USER, ERROR } from './types';

const localToken = localStorage.getItem('token');

const setToken = token => localStorage.setItem('token', token);

export const loginUser = values => (dispatch) => {
  axios
    .post('http://localhost:5000/api/admin-login', values)
    .then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
      setToken(res.data);
      window.location.href = '/products';
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const registerUser = values => (dispatch) => {
  axios
    .post('http://localhost:5000/api/admin-register', values)
    .then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
      setToken(res.data);
      window.location.href = '/products';
    })
    .catch(() => {
      dispatch({ type: ERROR, payload: 'error' });
    });
};

export const logoutUser = () => () => {
  axios
    .post('http://localhost:5000/api/logout', {
      token: localToken,
    }, {
      headers: { 'x-auth': localToken },
    })
    .then(() => {
      localStorage.clear();
      window.location.href = '/';
    });
};


export const getProfile = () => (dispatch) => {
  axios
    .get('http://localhost:5000/api/me', {
      headers: { 'x-auth': localToken },
    })
    .then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
    })
    .catch(() => {
      window.location.href = '/';
    });
};
