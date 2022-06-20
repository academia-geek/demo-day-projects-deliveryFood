import AOS from "aos";

AOS.init({
  duration: 1000,
});

export const ServicesSection = () => {
  return (
    <section className="services-secion-landing-page px-20 py-5 mb-36 bg-gradient-to-t from-[color:var(--dark-blue)] to-[color:var(--soft-blue)] ">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl w-5/12">
          Contamos con servicio de reparticion para la entrega de tu pedido.
        </h1>
        <img
          src="https://res.cloudinary.com/dp9zv16le/image/upload/v1654025725/delivery-food/repartidor-removebg-preview_n1m4ry.png"
          alt=""
          className="w-60"
          data-aos="fade-left"
        />
      </div>
    </section>
  );
};
