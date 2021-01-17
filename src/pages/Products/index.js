import React from 'react';
import Layout from '../../components/layout';
import { ProductsTable } from '../../components/products';
import { Alert } from '../../components/common';

const Products = () => {
  return (
    <Layout
      to='/'
      products
    >
      <ProductsTable 
        to={'/Producto/1'}
      />
      <Alert 
        alertType='warning'
      />
    </Layout>
  );
}

export default Products;