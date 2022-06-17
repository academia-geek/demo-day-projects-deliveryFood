import Carousel from "framer-motion-carousel";

import "../styles/menu.css";

const colors = ["#f90", "#ef0", "#e0f"];

export const CarrouselMenu = () => {
  return (
    <div className="carrousel">
      <Carousel
        interval={4000}
        renderArrowLeft={(a) => a.activeIndex}
        renderArrowRight={(a) => a.activeIndex}
      >
        {colors.map((color, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: colors[i],
            }}
            className="overflow-y-hidden"
          ></div>
        ))}
      </Carousel>
    </div>
  );
};
