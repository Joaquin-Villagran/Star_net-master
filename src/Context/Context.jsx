import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartitems] = useState([]);

  return (
    <CartContext.Provider value={[cartItems, setCartitems]}>
      {props.children}
    </CartContext.Provider>
  );
};
