import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalPagoPedido } from "../components/ModalPagoPedido";
import { useCart } from "../context/CartContext";

import "../styles/pedido.css";

const Pedido = () => {
  const [handleModalPagar, setHandleModalPagar] = useState(false);
  const navigate = useNavigate();
  const { cart, addCantidad, substractCantidad, total, setTotal } = useCart();

  const openModalPagar = () => {
    setHandleModalPagar(true);
  };

  useEffect(() => {
    if (cart.length < 1) return;
    const totalAPagar = cart
      .map((product) => product.precio * product.cantidad)
      .reduce((acum, current) => acum + current);
    setTotal(totalAPagar);
  });

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
                <img src={product.foto} alt={product.nombre} />
                <div>
                  <h3 className="font-bold text-xl mb-5">{product.nombre}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg my-5">Cantidad: {product.cantidad}</p>
                    <div>
                      <button
                        className="p-2 border-2 rounded-md mr-5"
                        onClick={() => substractCantidad(product.id)}
                      >
                        -
                      </button>
                      <button
                        className="p-2 border-2 rounded-md"
                        onClick={() => addCantidad(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-xl">
                    Total: ${product.precio * product.cantidad}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h3 className="text-center text-[color:var(--dark-blue)] font-medium">
              Total a pagar: $ {total}
            </h3>
            <button
              className="bg-[color:var(--yellow)] p-2 text-[color:var(--dark-blue)]
              w-1/6 text-lg capitalize shadow-xl rounded-sm hover:bg-amber-500"
              onClick={openModalPagar}
            >
              Realizar pago
            </button>
          </div>
        </>
      )}
      {handleModalPagar && (
        <ModalPagoPedido
          modalState={handleModalPagar}
          setModalState={setHandleModalPagar}
        />
      )}
    </div>
  );
};

export default Pedido;
