import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/pedido.css";

const Pedido = () => {
  const [cantidad, setcantidad] = useState(1);
  const navigate = useNavigate();
  const { cart } = useCart();

  const addCantidad = () => {
    setcantidad(cantidad + 1);
  };

  const substractCantidad = () => {
    setcantidad(cantidad - 1);
  };

  return (
    <div className="view-pedido">
      {cart.length < 1 ? (
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-center text-[color:var(--dark-blue)] text-3xl">
            No has añadido al carrito aún
          </h1>
          <button
            className="bg-[color:var(--yellow)] p-2 text-lg w-1/6 font-medium
          rounded-md shadow-lg text-[color:var(--dark-blue)] hover:bg-amber-400"
            onClick={() => navigate("/viewProducts")}
          >
            Ver productos disponibles
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-center text-[color:var(--dark-blue)] text-3xl">
            Haz añadido {cart.length} producto(s)
          </h1>
          <div className="products-cart-added">
            {cart.map((product) => (
              <div key={product.id} className="product">
                <img src={product.imagen} alt={product.nombre} />
                <div>
                  <h3 className="font-bold text-xl mb-5">{product.nombre}</h3>
                  <p>{product.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg my-5">Cantidad: {cantidad}</p>
                    <div>
                      <button
                        className="p-2 border-2 rounded-md mr-5"
                        onClick={substractCantidad}
                      >
                        -
                      </button>
                      <button
                        className="p-2 border-2 rounded-md"
                        onClick={addCantidad}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-xl">
                    Total: ${product.precio.replace("$", "")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Pedido;
