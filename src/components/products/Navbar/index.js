import React from 'react';
import { Link } from 'react-router-dom';
import { withNavbar } from '../../HOC';
import './navbar.component.css';

const Navbar = ({ children, to }) => {
  return (
    <nav
      className="py-3 d-flex flex-column justify-content-center align-items-center justify-content-md-between flex-md-row"
    >
      <h1 className="font-weight-bold logo">
        <Link
          to={to}
          className="nav-link navbar-link p-0 mb-2 mb-md-0"
        >
          ListadoProductos
        </Link>
      </h1>
      {children}
    </nav>
  );
}

export default withNavbar(Navbar);