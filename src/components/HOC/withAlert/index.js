import React from 'react';
import { Button, ButtonGroup } from '../../ui';

const withAlert = Component => props => {
  const { alertType } = props;
  Component.displayName = `withAlert(${Component.displayName || Component.name})`;

  const component = <Button
    type="button"
    className="btn btn-primary btn-primary-no-shadow"
  >Aceptar</Button>;

  switch (alertType) {
    case 'success':
      return (
        <Component
          {...props}
          title='¡Producto agregado correctamente!'
          content='El producto se ha guardado en la base de datos correctamente.'
          children={component}
          icon={alertType}
        />
      );

    case 'error':
      return (
        <Component
          {...props}
          title='¡Error!'
          content='Se ha producido un error, revise su conexión a internet.'
          children={component}
          icon={alertType}
        />
      );

    case 'warning':
      const buttonGroup = (
        <ButtonGroup
          className="d-flex flex-wrap justify-content-between px-1 mt-2"
        >
          <Button
            type="button"
            className="btn btn-danger btn-danger-alert ml-2"
          >Eliminar producto</Button>
          <Button
            type="button"
            className="btn btn-primary btn-primary-no-shadow mr-2"
          >Cancelar</Button>
        </ButtonGroup>
      );

      return (
        <Component
          {...props}
          title='¡Advertencia!'
          content='¿Está seguro?
        ¡Esta acción no se puede deshacer!'
          children={buttonGroup}
          icon={alertType}
        />
      )

    default:
      return (
        <Component {...props} />
      );
  }

}

export default withAlert;