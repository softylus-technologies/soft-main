import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ClientCard from "../client-cards/ClientCard";

const clients = [
  { src: "/Itqanlogo.svg", alt: "" },
  { src: "/Lingonuts.svg", alt: "" },
  { src: "/Aljadd.svg", alt: "" },
  { src: "/Mansa logo.svg", alt: "" },
  { src: "/Hostylus.svg", alt: "" },
  { src: "/Vend logo.svg", alt: "" },
  { src: "/salis logo.svg", alt: "" },
  { src: "/Decorationone.svg", alt: "" },
];
function ClientSlider() {
  return (
    <div className="md:mx-auto overflow-hidden mt-4 mb-4">
      <SwiperComponent
        className="pb-0"
        slidesPerView={7}
        loop={true}
        spaceBetween={20}
        modules={[Autoplay]}
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
        }}
      >
        {clients.map((item) => (
          <SwiperSlide className="h-100 xs:h-100" key={item.src}>
            <ClientCard src={item.src} alt={item.alt} />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default ClientSlider;
