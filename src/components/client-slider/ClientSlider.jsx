import React, { useState, useEffect } from "react";
import axios from "axios";
import SwiperComponent from "../swiper/SwiperComponent";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import ClientCard from "../client-cards/ClientCard";

function ClientSlider() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const response = await axios.get('https://strapi.softylus.com/api/clients?populate=Client_logo', {
          headers: {
            Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd'
          }
        });
        setClients(response.data.data);
      } catch (error) {
        console.error('Error fetching client logos:', error);
      }
    };

    fetchClientLogos();
  }, []);

  return (
    <div className="md:mx-auto overflow-hidden mt-4 mb-4">
      <SwiperComponent
        className="pb-0"
        slidesPerView={7}
        loop={true}
        spaceBetween={40}
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
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 30,
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
        {clients.map((client) => (
          <SwiperSlide className="h-100 xs:h-100" key={client.id}>
            <ClientCard 
            
              src={`https://strapi.softylus.com${client.attributes.Client_logo.data.attributes.url}`}
              alt={client.attributes.Client_logo.data.attributes.name || "Client Logo"}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}

export default ClientSlider;