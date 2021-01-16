import React from 'react';
import Layout from '../../components/layout';
import { ProductForm } from '../../components/common';

const NewProduct = () => {
  return (
    <Layout
      to='/'
    >
      <ProductForm
        title='Agrega un nuevo producto'
        buttonText='Agregar producto'
        namePlaceholder='Escribe un producto...'
        pricePlaceholder='Escribe un precio...'
      />
    </Layout>
  );
}

export default NewProduct;