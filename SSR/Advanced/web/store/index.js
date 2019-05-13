import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import products from './reducers';

export default combineReducers({
  router: routerReducer,
  products
});
