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
import swal from 'sweetalert2';

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
    swal.fire(
      '¡Producto agregado exitosamente!',
      'El producto se ha guardado en la base de datos correctamente.',
      'success'
    )
  } catch (e) {
    console.log(e);
    swal.fire(
      '¡Error!',
      'Se ha producido un error, revise su conexión a internet.',
      'error'
    )
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
    swal.fire(
      '¡Producto editado exitosamente!',
      'El producto se ha editado correctamente.',
      'success'
    )
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}

export const handleDeleteProduct = idProduct => dispatch => {
  try {
    swal.fire({
      title: '¡Advertencia',
      text: "¿Está seguro? ¡Esta acción no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E46C6C',
      cancelButtonColor: '#9482DB',
      confirmButtonText: 'Eliminar producto',
      cancelButtonText: 'Cancelar'
    }).then(async result => {
      if (result.isConfirmed) {
        await deleteProduct(idProduct);
        dispatch(deleteProductAction(idProduct));
        swal.fire(
          '¡Producto eliminado exitosamente!',
          'El producto se ha eliminado correctamente.',
          'success'
        )
      }
    })
  } catch (e) {
    console.log(e);
    dispatch(networkErrorAction());
  }
}