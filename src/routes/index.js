import { Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import DetailsOrder from '../pages/DetailsOrder';
import Cart from '../pages/Cart';

import CartProvider from '../pages/Cart/CartProvider';


export default function Routes() {
  return (
    <CartProvider>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/cart" component={Cart} isPrivate />
        <Route path="/details" component={DetailsOrder} isPrivate />
      </Switch>
    </CartProvider>  
  );
}
