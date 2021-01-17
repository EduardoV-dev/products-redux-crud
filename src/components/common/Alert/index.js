import React from 'react';
import { Button } from '../../ui';
import { SuccessIcon } from '../../icons';
import './alert.component.css';

const Alert = () => {
  return (
    <div className="Alert jump">
      <h3 className="alert-head">
        ¡Producto agregado correctamente!
      </h3>
      <div className="alert-body">
        <figure>
          <SuccessIcon />
        </figure>
        <p className="content">
          El producto se ha guardado en la base de datos correctamente.
        </p>
      </div>
      <div className="alert-foot">
        <Button 
          type="button"
          className="btn btn-primary btn-primary-no-shadow"
        >Aceptar</Button>
      </div>
    </div>
  );
}

export default Alert;