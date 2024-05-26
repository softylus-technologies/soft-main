import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardCustomer from "./CardCustomer";
import "./style/SayCustomer.css";
import axios from 'axios';

const SayCustomer = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    console.log("Fetching testimonials...");
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("https://strapi.softylus.com/api/customer-says?populate=imageSrc", {
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd"
          }
        });
        setTestimonials(response.data.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="Say-Customer-sec">
      <div className="Say-Customer-container">
        <h1 className="Say-Customer-title">See what our customers say about us</h1>
        <div className="slider-sec relative">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1030: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className=" max-w-md">
                <CardCustomer
                  SubHeading={testimonial.attributes.SubHeading}
                  Title={testimonial.attributes.Title}
                  SubProfile={testimonial.attributes.SubProfile}
                  imageSrc={testimonial.attributes.imageSrc?.data?.attributes?.url 
                    ? `https://strapi.softylus.com${testimonial.attributes.imageSrc.data.attributes.url}`
                    : '/default-image.jpg'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SayCustomer;
