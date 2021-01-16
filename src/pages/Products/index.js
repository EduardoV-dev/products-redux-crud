import React from 'react';
import Layout from '../../components/layout';
import { ProductsTable } from '../../components/products';

const Products = () => {
  return (
    <Layout
      to='/'
      products
    >
      <ProductsTable 
        to={'/Producto/1'}
      />
    </Layout>
  );
}

export default Products;