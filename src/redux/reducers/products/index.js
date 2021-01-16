import {
  FETCH_PRODUCTS,
  ERROR
} from '../../types/products';

const initialState = {
  products: [],
  error: false
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: false
      }
    case ERROR: 
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}

export default productsReducer;