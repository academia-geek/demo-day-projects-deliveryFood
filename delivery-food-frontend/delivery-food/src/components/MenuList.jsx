import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { getEstablecimientos } from "../services/establecimientos";

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

  if (establecimientos === null) return <h1>Cargando...</h1>;

  return (
    <div className="menu-list my-10">
      {establecimientos.length > 0 ? (
        <div
          className="menu-list-grid grid grid-cols-3 gap-5"
          data-aos="zoom-in"
        >
          {establecimientos.map((items) => (
            <div
              key={items.id}
              className="item-establecimiento flex justify-center p-2 rounded-md shadow-lg"
            >
              <h2 className="mb-3 font-medium text-[color:var(--dark-blue)] uppercase">
                {items.nombre}
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <h1>No hay elementos</h1>
      )}
    </div>
  );
};
