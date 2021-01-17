import React, { useEffect } from 'react';
import Error from '../Error';
import { useDispatch, useSelector } from 'react-redux';
import { withProductForm } from '../../HOC';
import { Button, Input } from '../../ui';
import { handleFormError } from '../../../redux/handlers/products';
import useForm from '../../../hooks/useForm';
import './productForm.component.css';

const ProductForm = ({
  title,
  buttonText,
  namePlaceholder = '',
  pricePlaceholder = '',
  handleProductManage
}) => {
  const [input, handleOnChange, setInput] = useForm({
    productName: '',
    price: 0
  });
  const dispatch = useDispatch();
  const { formError, selectedProduct } = useSelector(state => state.products);
  /* When being on the edit page, the inputs will have the value of the corresponding product selected, this won't happen if the products page is on and the useEffect will do nothing */
  useEffect(() => {
    if (selectedProduct) setInput(selectedProduct);
    // eslint-disable-next-line
  }, [selectedProduct]);
  const { productName, price } = input;

  const handleSubmit = e => {
    e.preventDefault();

    if (productName.trim() === '' || isNaN(price) || price <= 0) {
      dispatch(handleFormError(true));
      return;
    }
    dispatch(handleFormError(false));
    /* When being on the edit page, will handle the edit event and will handle the create event if opposite; new product page */
    dispatch(handleProductManage(input));
  }

  const errorComponent = formError ? <Error message="Ambos campos son obligatorios" /> : null;

  return (
    <>
      <h3 className="text-center my-5">
        {title}
      </h3>
      <form className="form"
        onSubmit={handleSubmit}
      >
        {errorComponent}
        <div className="form-group">
          <label className="font-weight-bold">
            Nombre del producto
          </label>
          <Input
            type="text"
            className="form-control input-text"
            placeholder={namePlaceholder}
            name="productName"
            onChange={handleOnChange}
            value={productName}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">
            Precio del producto
          </label>
          <Input
            type="number"
            step='0.01'
            className="form-control input-text"
            placeholder={pricePlaceholder}
            name="price"
            onChange={handleOnChange}
            value={price}
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