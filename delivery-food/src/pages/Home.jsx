import HeaderLanding from "../components/landingPage/HeaderLanding";
import AOS from "aos";

import "../styles/landingPage.css";
import { Link } from "react-router-dom";

AOS.init({
  duration: 1000,
});

export default function Home() {
  return (
    <>
      <HeaderLanding />
      <main className="mx-20 my-20">
        <h1 className="uppercase text-2xl text-center">
          nuestros mejores productos
        </h1>
        <div className="mt-10 flex flex-col gap-10">
          <div
            className="category-1 categories p-4 flex items-center gap-10 w-7/12 rounded-sm shadow-xl"
            data-aos="fade-right"
          >
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1653931341/delivery-food/anh-nguyen-kcA-c3f_3FE-unsplash_ovzjnj.jpg"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">Categoria #</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi magnam quo, expedita optio eaque, rem eius fugit
                blanditiis ab modi accusantium quaerat.
              </p>
            </div>
          </div>
          <div
            className="categories p-4 flex items-center gap-10 w-7/12 rounded-sm shadow-xl"
            data-aos="fade-left"
          >
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1653931340/delivery-food/chad-montano-MqT0asuoIcU-unsplash_zsws9d.jpg"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">Categoria #</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi magnam quo, expedita optio eaque, rem eius fugit
                blanditiis ab modi accusantium quaerat.
              </p>
            </div>
          </div>
          <div
            className="categories p-4 flex items-center gap-10 w-7/12 rounded-sm shadow-xl"
            data-aos="fade-right"
          >
            <img
              src="https://res.cloudinary.com/dp9zv16le/image/upload/v1653931338/delivery-food/lidye-1Shk_PkNkNw-unsplash_fcupwr.jpg"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">Categoria #</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eligendi magnam quo, expedita optio eaque, rem eius fugit
                blanditiis ab modi accusantium quaerat.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="mt-20 w-60 p-2 bg-[color:var(--primary)] text-white text-center text-xl shadow-2xl"
          >
            Ver más
          </Link>
        </div>
      </main>
    </>
  );
}
