import HeaderLanding from "../components/landingPage/HeaderLanding";
import AOS from "aos";

import "../styles/landingPage.css";
import { Link } from "react-router-dom";
import { ServicesSection } from "../components/landingPage/ServicesSection";
import { Footer } from "../components/Footer";

AOS.init({
  duration: 1000,
});

export default function Home() {
  return (
    <>
      <HeaderLanding />
      <main className="py-20">
        <h1 className="h1-landing-page uppercase text-2xl text-center">
          nuestros mejores productos
        </h1>
        <div className="container-mejores-productos-landing-page mt-10 flex flex-col gap-10">
          <div
            className="category-1 categories p-4 flex items-center gap-10 w-7/12 rounded-sm 
            shadow-xl"
            data-aos="fade-right"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fcomida-rapida%2Fdescarga.jpg?alt=media&token=4ca53461-91c9-4680-88fd-75e16422e428"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">pizza de pepperoni</h2>
              <p>
                El pepperoni es una variedad estadounidense de salami picante
                elaborado con cerdo curado y ternera sazonado con pimentón u
                otro chile.
              </p>
            </div>
          </div>
          <div
            className="categories p-4 flex items-center gap-10 w-7/12 rounded-sm 
            shadow-xl overflow-hidden"
            data-aos="fade-left"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fpostres%2Fpanna_cotta.jpg?alt=media&token=cb1c76ad-c5c8-400b-8f93-74d0868c3862"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">Panna Cotta</h2>
              <p>
                Postre italiano de crema moldeada, a menudo su guarnición se
                compone de coulis de frutos del bosque, salsas de caramelo o
                chocolate, cubierto de frutas o licores.
              </p>
            </div>
          </div>
          <div
            className="categories p-4 flex items-center gap-10 w-7/12 rounded-sm shadow-xl"
            data-aos="fade-right"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fvegetariano%2Fdescarga.jpg?alt=media&token=f39b0303-7976-45f9-9ca8-c37f24479688"
              alt=""
              className="w-56 h-56 object-cover"
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-center">pastas vegetarianas</h2>
              <p>
                La pasta es uno de los platos o recetas sencillas más consumidas
                de nuestra alimentación y gastronomía
              </p>
            </div>
          </div>
        </div>
      </main>
      <ServicesSection />
      <Footer />
    </>
  );
}
