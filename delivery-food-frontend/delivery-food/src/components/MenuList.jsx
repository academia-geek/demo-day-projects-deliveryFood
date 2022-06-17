import { useState, useEffect } from "react";
import Aos from "aos";
import { getMenu } from "../services/getMuenu";

Aos.init({
  duration: 1000,
});

export const MenuList = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    getMenu()
      .then((data) => setMenu(data))
      .catch((error) => console.log(error));
  }, []);

  if (menu === null) return <h1>Cargando...</h1>;

  return (
    <div className="menu-list my-10">
      {menu.length > 0 ? (
        <div className="grid grid-cols-3 gap-5" data-aos="zoom-in">
          {menu.map((items) => (
            <div
              key={items.id}
              className="menu-list__items flex flex-col items-center"
            >
              <h2 className="mb-5 font-medium">{items.tipo_menu}</h2>
              {items.items.map((it, index) => (
                <div key={index} className="menu-list__item">
                  <img src={it.foto} alt={it.nombre} className="h-full" />
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h1>Nio hay elementos</h1>
      )}
    </div>
  );
};
