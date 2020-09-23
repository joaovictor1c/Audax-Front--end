import React, {createContext, useReducer} from 'react';
import {CartReducer} from './CartReducer';

export const CartContext = createContext();

function Cart({children}) {
  const [cart, dispatch] = useReducer(CartReducer, {shopping: [], totalPrice:0, count:0});

  return (
    <CartContext.Provider value={{...cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default Cart;