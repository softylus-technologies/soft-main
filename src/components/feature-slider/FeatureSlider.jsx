import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const featurres = [
  { id: 1, image: "/image 16.svg" },
  { id: 2, image: "/image 17.svg" },
  { id: 3, image: "/image 18.svg" },
  { id: 4, image: "/image 19.svg" },
  { id: 5, image: "/image 20.svg" },
  { id: 6, image: "/image 21.svg" },
];
function FeatureSlider() {
  return (
    <div className="featured-on-section md:container md:mx-auto overflow-hidden my-10">
      <h1 className="text-3xl md:text-5xl text-center">
        We featured on
      </h1>
      <SwiperComponent
        className="pb-0"
        slidesPerView={5}
        loop={true}
        spaceBetween={20}
        // modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {featurres.map((item) => (
          <SwiperSlide key={item.id}>
            <center>
              <img src={item.image} className="w-fit h-fit object-cover" />
            </center>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default FeatureSlider;
