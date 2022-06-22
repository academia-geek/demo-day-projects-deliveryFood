import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { getEstablecimientos } from "../services/establecimientos";
import { Loading } from "./Loading";

import "../styles/menuEstablecimiento.css";

Aos.init({
  duration: 1000,
});

export const MenuList = () => {
  const [establecimientos, setEstablecimientos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getEstablecimientos()
      .then((data) => setEstablecimientos(data))
      .catch((error) => console.log(error));
  }, []);

  if (establecimientos === null)
    return (
      <div className="flex justify-center mt-5">
        <Loading />
      </div>
    );

  return (
    <div className="menu-list my-10">
      {establecimientos.length > 0 ? (
        <div
          className="menu-list-grid grid grid-cols-3 gap-5"
          data-aos="zoom-in"
        >
          {establecimientos.map((items) => (
            <div
              key={items.id_establecimiento}
              className="item-establecimiento flex flex-col justify-center rounded-md shadow-lg"
              onClick={() => navigate(`/viewProducts/menu/${items.id_menu}`)}
            >
              <img src={items.foto_est} alt="" />
              <div>
                <h2 className="mb-3 font-medium text-[color:var(--dark-blue)] uppercase">
                  {items.nombre}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No hay elementos</h1>
      )}
    </div>
  );
};
