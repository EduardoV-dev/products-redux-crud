import clienteAxios from '../../../config/axios';
import {
  getProductsAction,
  handleErrorAction
} from '../../actions/products';

export const fetchProducts = () => async dispatch => {
  try {
    const products = await clienteAxios.get('/productos');
    dispatch(getProductsAction(products.data));
  } catch (e) {
    console.log(e);
    dispatch(handleErrorAction());
  }
}