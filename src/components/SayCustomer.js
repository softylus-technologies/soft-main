import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination"; // Pagination module
import "swiper/css/navigation";
import { CardCustomer } from "./CardCustomer";
import "./style/SayCustomer.css";
const SayCustomer = () => {
  return (
    <section className="Say-Coustmer-sec ">
      <div className="Say-Coustmer-container">
        <h1 className="Say-Coustmer-title">
          See what our customer say about us
        </h1>
        <div className="slider-sec relative">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1030: {
                slidesPerView: 3,
                // slidesPerGroup: 3, // Group 3 slides together
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            direction="horizontal"
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="py-10"
          >
            <div className="Say-Coustmer-slider">
              <SwiperSlide>
                <CardCustomer
                  SubHeading="Have worked with Softylus for almost two years.They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                  Title="Sally Baalbaki"
                  SubProfile="CEO, Decoration one"
                  imageSrc="/coding.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardCustomer
                  SubHeading="Have worked with Softylus for almost two years.They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                  Title="Sally Baalbaki"
                  SubProfile="CEO, Decoration one"
                  imageSrc="/coding.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardCustomer
                  SubHeading="Have worked with Softylus for almost two years.They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                  Title="Sally Baalbaki"
                  SubProfile="CEO, Decoration one"
                  imageSrc="/coding.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardCustomer
                  SubHeading="Have worked with Softylus for almost two years.They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                  Title="Sally Baalbaki"
                  SubProfile="CEO, Decoration one"
                  imageSrc="/coding.gif"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CardCustomer
                  SubHeading="Have worked with Softylus for almost two years.They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                  Title="Sally Baalbaki"
                  SubProfile="CEO, Decoration one"
                  imageSrc="/coding.gif"
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SayCustomer;
