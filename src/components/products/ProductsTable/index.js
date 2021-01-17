import React, { useEffect } from 'react';
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/handlers/products';
import './productsTable.component.css';

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  // eslint-disable-next-line
  useEffect(() => dispatch(fetchProducts()), []);
  if (products.length === 0) return null;

  return (
    <>
      <h3 className="text-center my-5">Lista de productos existentes</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-headers">
            <tr>
              <th scope='col' className="col-id">ID</th>
              <th scope='col' className="col-product">Producto</th>
              <th scope='col' className="col-price">Precio</th>
              <th scope='col' className="col-actions">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <Product
                key={product.id}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductsTable;