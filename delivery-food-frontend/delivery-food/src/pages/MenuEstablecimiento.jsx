import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMenu } from "../services/menu";
import { Loading } from "../components/Loading";
import { useCart } from "../context/CartContext";
import { RiShoppingCart2Line } from "react-icons/ri";

import "../styles/menuEstablecimiento.css";

const MenuEstablecimiento = () => {
  const [menuEstablecimientos, setMenuEstablecimientos] = useState(null);
  const { idMenu } = useParams();
  const navigate = useNavigate();
  const { cart, pushCart } = useCart();

  useEffect(() => {
    getMenu(idMenu)
      .then((data) => setMenuEstablecimientos(data))
      .catch((error) => console.log(error));
  }, [idMenu]);

  if (menuEstablecimientos === null)
    return (
      <div className="menu-list-establecimiento">
        <div className="flex justify-center mt-5">
          <Loading />
        </div>
      </div>
    );

  // const { items } = menuEstablecimientos;

  return (
    <div className="menu-list-establecimiento my-10">
      <div className="flex items-center justify-center mx-8 relative">
        <h1 className="text-center text-3xl text-[color:var(--dark-blue)]">
          Menú {menuEstablecimientos.tipo_menu}
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
      <div className="detail-establecimiento-items">
        {menuEstablecimientos.items.length < 1 ||
        !menuEstablecimientos.items ? (
          <h2>No hay elementos</h2>
        ) : (
          menuEstablecimientos.items.map((item, index) => (
            <div key={index} className="item-establecimiento-single">
              <img src={item.foto} alt={item.nombre} />
              <h3 className="">{item.nombre}</h3>
              <div className="p-3 flex flex-col justify-between gap-5">
                <p className="text-lg">{item.descripcion}</p>
                <span className="text-lg">precio: ${item.valor}</span>
                <button
                  className="bg-[color:var(--yellow)] text-[color:var(---dark-blue)]
                  w-3/6 p-3 font-semibold rounded-md hover:bg-amber-400 text-md"
                  onClick={() =>
                    pushCart({
                      id: idMenu + (index + 1),
                      nombre: item.nombre,
                      foto: item.foto,
                      precio: item.valor,
                      cantidad: 1,
                    })
                  }
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuEstablecimiento;
