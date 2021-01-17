import { combineReducers } from 'redux';

import productsReducer from './products';
import alertReducer from './alert';

const reducer = combineReducers({
  products: productsReducer,
  alert: alertReducer
});

export default reducer;