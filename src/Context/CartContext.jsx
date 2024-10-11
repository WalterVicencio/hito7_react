import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

const [carta, setCarta] =useState([])

const [total, setTotal] =useState(0);

  return (
    <CartContext.Provider
      value={{
        total,
        setTotal,
        carta,
        setCarta
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;