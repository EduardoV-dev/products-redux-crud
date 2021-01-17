import {
  getProductsAction,
  networkErrorAction,
  formErrorAction,
  createProductAction,
  selectProductAction,
  editProductAction,
  deleteProductAction
} from '../../actions/products';
import {
  fetchProductsFromAPI,
  createProduct,
  editProduct,
  deleteProduct
} from '../../../services/api/products';
import { trimProduct } from '../../../utils/products';

export const fetchProducts = () => async dispatch => {
  try {
    const products = await fetchProductsFromAPI('/productos');
    dispatch(getProductsAction(products));
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}

export const handleFormError = (value) => dispatch =>
  dispatch(formErrorAction(value))

export const handleCreateProduct = product => async dispatch => {
  try {
    const productTrimmed = trimProduct(product);
    await createProduct(productTrimmed);
    dispatch(createProductAction(productTrimmed));
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}

export const handleSelectProduct = product => 
  selectProductAction(product);

export const handleEditProduct = product => async dispatch => {
  try {
    const productTrimmed = trimProduct(product);
    await editProduct(productTrimmed);
    dispatch(editProductAction(productTrimmed));
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}

export const handleDeleteProduct = idProduct => async dispatch => {
  try {
    await deleteProduct(idProduct);
    dispatch(deleteProductAction(idProduct));
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}