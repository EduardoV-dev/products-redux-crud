import React from 'react';

const withProductForm = Component => props => {
  const { edit } = props;

  Component.displayName = `withProductForm(${Component.displayName || Component.name})`;

  switch (edit) {
    case true:
      return (
        <Component {...props} />
      )
    default:
    case false:
      return (
        <Component {...props} />
      );
  }
}

export default withProductForm;