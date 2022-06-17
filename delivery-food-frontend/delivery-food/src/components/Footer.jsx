import { Link } from "react-router-dom";

import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="px-20 py-5 grid grid-cols-2">
      <div className="sobre-nosotros">
        <h2 className="text-center text-[color:var(--soft-blue)] font-bold capitalize text-2xl">
          sobre delivery food
        </h2>
        <ul className="flex flex-col gap-2 mt-5 items-center text-[color:var(--dark-blue)]">
          <li>Sobre nosotros</li>
          <li>Terminos y condiciones</li>
          <li>Politica y privacidad</li>
        </ul>
      </div>
      <div className="quieres-ser-nuestro-equipo">
        <h2 className="text-center text-[color:var(--soft-blue)] font-bold capitalize text-2xl">
          ¿Quieres ser parte de nuestro equipo?
        </h2>
        <div className="our-team">
          <p className="text-[color:var(--dark-blue)]">
            Si quieres ser parte de nuestro equipo
            <span> haz click en el siguiente botón</span>
          </p>
          <div className="btn-unete-aqui">
            <Link
              to="/"
              className="btn-unete-aqui bg-[color:var(--soft-blue)] text-white font-semibold
               p-3 capitalize transition-all duration-500 hover:bg-[color:var(--light-blue)]
               shadow-lg hover:shadow-2xl rounded-md hover:no-underline hover:text-white"
            >
              unete aquí
            </Link>
          </div>
          <div className="image-footer">
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1654025725/delivery-food/repartidor-removebg-preview_n1m4ry.png"
              alt=""
              className="w-60"
            />
          </div>
        </div>
      </div>
      <div className="redes-sociales flex justify-center">
        <h2>Siguenos en nuestras redes sociales</h2>
      </div>
    </footer>
  );
};
