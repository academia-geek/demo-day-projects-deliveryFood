import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { RiShoppingCart2Line } from "react-icons/ri";
import { getMenu } from "../services/getMuenu";

import "../styles/detailProduct.css";

const ProductDetail = () => {
  const [products, setProducts] = useState(null);
  const { pushCart, cart } = useCart();
  const { productMenu } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMenu()
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  if (products === null)
    return (
      <div className="loading-single-menu">
        <h1>loading...</h1>
      </div>
    );

  const getProduct = products.find((menu) => menu.id === Number(productMenu));

  const getElement = (items) => {
    pushCart(items);
  };

  return (
    <div className="detail-product">
      {products === null && <h1>loading...</h1>}
      <div className="flex items-center justify-center mx-8 relative">
        <h1 className="text-4xl text-center text-[color:var(--dark-blue)]">
          {getProduct.tipo_menu}
        </h1>
        <span
          className="absolute right-0 text-3xl cursor-pointer"
          onClick={() => navigate("/viewProducts/pedido")}
        >
          {cart.length < 1 ? (
            <RiShoppingCart2Line />
          ) : (
            <>
              <div className="bg-[color:var(--yellow)] w-3 h-3 absolute bottom-0 rounded-full"></div>
              <RiShoppingCart2Line />
            </>
          )}
        </span>
      </div>
      <div className="detail-product__items">
        {getProduct.items.map((item, index) => (
          <div key={index} className="items-item">
            <img src={item.foto} alt={item.nombre} />
            <div>
              <h3 className="text-[color:var(--dark-blue)] mb-2">
                {item.nombre}
              </h3>
              <p>{item.descripcion}</p>
              <p className="font-bold text-xl">{item.valor}</p>
              <button
                className="bg-[color:var(--yellow)] mt-3 text-center 
                w-full p-2 text-[color:var(--dark-blue)] text-lg hover:bg-amber-400
                rounded-md"
                onClick={() =>
                  getElement({
                    id: getProduct.id + 1,
                    nombre: item.nombre,
                    descripcion: item.descripcion,
                    imagen: item.foto,
                    precio: item.valor,
                  })
                }
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
