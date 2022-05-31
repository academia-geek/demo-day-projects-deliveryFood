import { Link } from "react-router-dom";

import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="mt-20 px-20 py-5 grid grid-cols-2">
      <div className="">
        <h2 className="text-center text-[color:var(--primary)] font-bold capitalize text-2xl">
          sobre delivery food
        </h2>
        <ul className="flex flex-col gap-2 mt-5 items-center text-[color:var(--primary)]">
          <li>Sobre nosotros</li>
          <li>Terminos y condiciones</li>
          <li>Politica y privacidad</li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-center text-[color:var(--primary)] font-bold capitalize text-2xl">
          ¿Quieres ser parte de nuestro equipo?
        </h2>
        <div className="our-team">
          <p className="text-[color:var(--primary)]">
            Si quieres ser parte de nuestro equipo
            <span> haz click en el siguiente botón</span>
          </p>
          <div className="">
            <Link
              to="/"
              className="btn-unete-aqui bg-[color:var(--soft-blue)] text-white font-semibold
               p-3 capitalize transition-all duration-500 hover:bg-[color:var(--primary)]
               shadow-lg hover:shadow-2xl rounded-md"
            >
              unete aquí
            </Link>
          </div>
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1654025725/delivery-food/repartidor-removebg-preview_n1m4ry.png"
            alt=""
            className="w-60"
          />
        </div>
      </div>
      <div className="flex justify-center col-span-2">
        <h2>Siguenos en nuestras redes sociales</h2>
      </div>
    </footer>
  );
};
