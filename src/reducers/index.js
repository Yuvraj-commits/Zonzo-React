import { combineReducers } from 'redux'; 
import productReducer from './productReducer';
import sellerReducer from './sellerReducer';

export default combineReducers({
  seller: sellerReducer,
  product: productReducer
});
