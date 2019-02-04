import axios from 'axios';

import { LOGIN_USER } from './types';


export const loginUser = values => (dispatch) => {
  axios
    .post('http://localhost:5000/api/login', values)
    .then((res) => {
      dispatch({
        type: LOGIN_USER,
        payload: res,
      });
      alert('Login Success');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registerUser = values => (dispatch) => {
  axios
    .post('http://localhost:5000/api/register', values)
    .then((res) => {
      dispatch({
        type: LOGIN_USER,
        payload: res,
      });
      alert('Register Success');
    }).catch((err) => {
      console.log(err);
    });
};
