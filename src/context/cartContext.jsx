import React, { useState, useContext } from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export function useCount() {
  return useContext(CartContext);
}

export function useUpdateCount() {
  return useContext(CartUpdateContext);
}

export const CartProvider = (props) => {
  const [cartCountValue, updateCartCount] = useState(0);

  function updateCount(value) {
    updateCartCount(value);
  }

  return (
    <CartUpdateContext.Provider value={updateCount}>
      <CartContext.Provider value={cartCountValue}>
        {props.children}
      </CartContext.Provider>
    </CartUpdateContext.Provider>
  );
};
