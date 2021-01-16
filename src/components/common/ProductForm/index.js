import React from 'react';
import { withProductForm } from '../../HOC';
import { Button, Input } from '../../ui';
import './productForm.component.css';

const ProductForm = ({
  title,
  buttonText,
  namePlaceholder = '',
  pricePlaceholder = ''
}) => {
  return (
    <>
      <h3 className="text-center my-5">
        {title}
      </h3>
      <form className="form">
        <div className="form-group">
          <label className="font-weight-bold">
            Nombre del producto
          </label>
          <Input
            type="text"
            className="form-control input-text"
            placeholder={namePlaceholder}
            name="product"
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">
            Precio del producto
          </label>
          <Input
            type="text"
            className="form-control input-text"
            placeholder={pricePlaceholder}
            name="price"
          />
        </div>
        <div className="form-group">
          <Button
            type="submit"
            className="form-control btn btn-danger mt-2"
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </>
  );
}

export default withProductForm(ProductForm);