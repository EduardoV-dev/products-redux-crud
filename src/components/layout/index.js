import React from 'react';
import { Navbar } from '../products';
import './layout.component.css';

const Layout = ({ products, children, to }) => {
  return (
    <>
      <header className="header d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <Navbar 
                to={to}
                products={products}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <section className="col">
            {children}
          </section>
        </div>
      </main>
    </>
  );
}

export default Layout;