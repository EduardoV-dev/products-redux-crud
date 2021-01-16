import React from 'react';
import { Link } from 'react-router-dom';

const withNavbar = Component => props => {
  const { products } = props;

  Component.displayName = `withNavbar(${Component.displayName || Component.name})`;

  const buttonComponent = <Link to={'/Nuevo-Producto'} className="btn btn-primary">
    Agregar Producto +
  </Link>

  switch (products) {
    case true:
      return (
        <Component
          children={buttonComponent}
          {...props}
        />
      );
    case false:
    default:
      return (
        <Component {...props} />
      );
  }
}

export default withNavbar;