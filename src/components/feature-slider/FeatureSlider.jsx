import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "../apply-form/ApplyForm.css"

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
      <div className="featured-on-section-content">
      <h1 className="text-3xl md:text-5xl text-center">
      Featured on
      </h1>
      
      <Swiper
                className="featured-on-section-slider"
                breakpoints={{
                  375:{
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  400:{
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  768:{
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1070: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                  1640: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                // pagination={{ clickable: true }}
                spaceBetween={30}
                // slidesPerView={2}
                direction="horizontal"
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => console.log('slide change')}
              >
        {featurres.map((item) => (
          <SwiperSlide key={item.id}>
              <img src={item.image}  />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default FeatureSlider;
