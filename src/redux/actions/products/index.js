import {
  FETCH_PRODUCTS,
  NETWORK_ERROR,
  CREATE_PRODUCT,
  FORM_ERROR,
  EDIT_PRODUCT,
  SELECT_PRODUCT,
  DELETE_PRODUCT
} from '../../types/products';

export const getProductsAction = products => ({
  type: FETCH_PRODUCTS,
  payload: products
});

export const networkErrorAction = () => ({
  type: NETWORK_ERROR
});

export const formErrorAction = value => ({
  type: FORM_ERROR,
  payload: value
});

export const createProductAction = product => ({
  type: CREATE_PRODUCT,
  payload: product
});

export const editProductAction = product => ({
  type: EDIT_PRODUCT,
  payload: product
});

export const selectProductAction = product => ({
  type: SELECT_PRODUCT,
  payload: product
});

export const deleteProductAction = idProduct => ({
  type: DELETE_PRODUCT,
  payload: idProduct
});