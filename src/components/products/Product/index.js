import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  handleSelectProduct,
  handleDeleteProduct
} from '../../../redux/handlers/products';
import { Button } from '../../ui';

const Product = ({ product }) => {
  const { id, productName, price } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = () => {
    dispatch(handleSelectProduct(product));
    history.push(`/Producto/${id}`);
  }

  const deleteProd = () => dispatch(handleDeleteProduct(id));

  return (
    <tr>
      <th>{id}</th>
      <td>{productName}</td>
      <td>
        <span className="text-success">USD </span>
        {Intl.NumberFormat('en-EN').format(price)}
      </td>
      <td>
        <Button
          type="button"
          className="btn btn-info"
          onClick={handleEdit}
        >Editar</Button>
        <Button
          type="button"
          className="btn btn-danger"
          onClick={deleteProd}
        >Eliminar</Button>
      </td>
    </tr>
  );
}

export default Product;