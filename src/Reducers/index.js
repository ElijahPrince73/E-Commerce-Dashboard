import { combineReducers } from 'redux';
import auth from './auth';
import productsList from './products';

export default combineReducers({
  auth,
  productsList,
});
