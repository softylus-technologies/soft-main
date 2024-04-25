import React from "react";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function SwiperComponent({ spaceBetween, slidesPerView, children, ...rest }) {
  return (
    <Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView} {...rest}>
      {children}
    </Swiper>
  );
}

export default SwiperComponent;
