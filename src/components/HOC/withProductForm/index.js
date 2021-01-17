import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  handleCreateProduct,
  handleEditProduct,
  handleSelectProduct
} from '../../../redux/handlers/products';

const withProductForm = Component => props => {
  const { edit } = props;
  const history = useHistory();

  Component.displayName = `withProductForm(${Component.displayName || Component.name})`;

  const handleProduct = edit ? handleEditProduct : handleCreateProduct;

  const handleProductManage = product => dispatch => {
    if (edit) dispatch(handleSelectProduct(product));
    dispatch(handleProduct(product));
    history.push('/');
  }

  return (
    <Component
      {...props}
      handleProductManage={handleProductManage}
    />
  )
}

export default withProductForm;