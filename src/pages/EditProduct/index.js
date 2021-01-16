import React from 'react';
import Layout from '../../components/layout';
import { ProductForm } from '../../components/common';

const EditProduct = () => {
  return (  
    <Layout
      to='/'
    >
      <ProductForm
        title='Edita un producto'
        buttonText='Editar producto'
        edit
      />
    </Layout>
  );
}
 
export default EditProduct;