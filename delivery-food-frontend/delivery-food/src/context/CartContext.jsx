import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const useCart = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const pushCart = (element) => {
    setCart([...cart, element]);
  };

  const addCantidad = (id) => {
    const element = cart.find((product) =>
      product.id === id
        ? {
            ...product,
            cantidad: (product.cantidad += 1),
          }
        : null
    );
    const newElement = [...cart, element];
    const elementosUnicos = [...new Set(newElement)];
    setCart(elementosUnicos);
  };

  const substractCantidad = (id) => {
    const element = cart.find((product) =>
      product.id === id
        ? {
            ...product,
            cantidad: product.cantidad > 1 ? (product.cantidad -= 1) : null,
          }
        : null
    );
    const newElement = [...cart, element];
    const elementosUnicos = [...new Set(newElement)];
    setCart(elementosUnicos);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        pushCart,
        addCantidad,
        substractCantidad,
        total,
        setTotal,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
