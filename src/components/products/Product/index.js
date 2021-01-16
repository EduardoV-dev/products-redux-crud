import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';

const Product = ({ product }) => {
  const { id, nombre, precio } = product;

  return (
    <tr>
      <th>{id}</th>
      <td>{nombre}</td>
      <td>
        <span className="text-success">USD </span> 
        {Intl.NumberFormat('en-EN').format(precio)}
      </td>
      <td>
        <Link
          to={`/Producto/${id}`}
          className="btn btn-info"
        >Editar</Link>
        <Button
          type="button"
          className="btn btn-danger"
        >Eliminar</Button>
      </td>
    </tr>
  );
}

export default Product;