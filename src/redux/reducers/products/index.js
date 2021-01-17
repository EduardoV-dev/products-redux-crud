import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  NETWORK_ERROR,
  FORM_ERROR,
  SELECT_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from '../../types/products';

const initialState = {
  products: [],
  error: false,
  formError: false,
  selectedProduct: null
}

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: false,
        selectedProduct: null,
        formError: false
      }
    case NETWORK_ERROR: 
      return {
        ...state,
        error: true
      }
    case FORM_ERROR:
      return {
        ...state, 
        formError: action.payload
      }
    case CREATE_PRODUCT:
      return {
        ...state,
        error: false,
        products: [...state.products, action.payload]
      }
    case SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product),
        error: false
      }
    case DELETE_PRODUCT: 
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
        error: false
      }
    default:
      return state;
  }
}

export default productsReducer;