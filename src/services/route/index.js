import React from 'react';
import Products from '../../pages/Products';
import NewProduct from '../../pages/NewProduct';
import EditProduct from '../../pages/EditProduct';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const AppRoute = () => {
  return (  
    <Router>
      <Switch>
        <Route path='/' exact component={Products} />
        <Route path="/Nuevo-Producto" exact component={NewProduct} />
        <Route path="/Producto/:id" exact component={EditProduct} />
      </Switch>
    </Router>
  );
}
 
export default AppRoute;