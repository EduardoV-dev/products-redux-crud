import {
  FETCH_PRODUCTS,
  ERROR
} from '../../types/products';

export const getProductsAction = products => ({
  type: FETCH_PRODUCTS,
  payload: products
});

export const handleErrorAction = () => ({
  type: ERROR
});