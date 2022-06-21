import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const pushCart = (element) => {
    setCart([...cart, element]);
  };

  return (
    <cartContext.Provider value={{ cart, setCart, pushCart }}>
      {children}
    </cartContext.Provider>
  );
};
