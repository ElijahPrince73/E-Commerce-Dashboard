import axios from 'axios';
import { GET_USER } from './types';

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
    .catch((err) => {
      console.log(err);
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
    .catch((err) => {
      console.log(err);
    });
};

export const logoutUser = () => {
  axios
    .delete('http://localhost:5000/api/me/token', {
      headers: { 'x-auth': localToken },
    })
    .then(() => {
      localStorage.removeItem('header');
      window.location.href = '/';
    });
};


export const getProfile = values => (dispatch) => {
  axios
    .get('http://localhost:5000/api/me', {
      headers: { 'x-auth': localToken },
    })
    .then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
    })
    .catch((err) => {
      window.location.href = '/';
    });
};
