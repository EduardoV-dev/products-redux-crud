import React from 'react';
import './error.component.css';

const Error = ({ message }) => {
  return (
    <div 
      className="alert alert-danger text-center text-sm-left"
    >
      <h3>¡Error!</h3>
      <hr/>
      <p>{message}</p>
    </div>
  );
}

export default Error;