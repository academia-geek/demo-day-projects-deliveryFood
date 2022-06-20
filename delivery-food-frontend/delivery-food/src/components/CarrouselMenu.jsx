import Carousel from "framer-motion-carousel";

import "../styles/menu.css";

const IMAGES_COROUSEL = [
  "https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fcomida-rapida%2Fhamburguesa-gourmet.jpg?alt=media&token=513010e3-0040-466d-8d01-88665dcd2ee7",
  "https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fvegetariano%2Fsalteado-de-brocoli-y-champinones-con-cebolla_version_1652878022.jpg?alt=media&token=cc278beb-5a0d-4380-8301-a825b34347f8",
  "https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Fpostres%2Fpanna_cotta.jpg?alt=media&token=cb1c76ad-c5c8-400b-8f93-74d0868c3862",
];

export const CarrouselMenu = () => {
  return (
    <div className="carrousel">
      <Carousel
        interval={4000}
        renderArrowLeft={(a) => a.activeIndex}
        renderArrowRight={(a) => a.activeIndex}
      >
        {IMAGES_COROUSEL.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
