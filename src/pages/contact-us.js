import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/ContactUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardCustomer } from "../components/CardCustomer";
import ReCAPTCHA from 'react-google-recaptcha';
import Seo from "../components/seo";
import axios from 'axios';  // Ensure axios is imported if making HTTP requests

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };   

  const  handleVerification = (value) => {
    setIsVerified(value ? true : false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Please verify that you are not a robot.');
      return;
    }

    try {
      const response = await axios.post("https://unruffled-galois.65-21-12-13.plesk.page/api/contact-uses", { data: formData }, {
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
          "Authorization": `Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd` 
        }
      });

      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        setFormError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormError(true);
    }
  };

  // Testimonials
  useEffect(() => {
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
    <>
      <Seo 
        title="Get in Touch | Contact Softylus"
        description="Ready to start your software development journey? Contact Softylus today to discuss your project needs and learn how we can help elevate your business."
      />
      <NavBar />
      <div className="container">
        <img
          className="circle-sec !left-[unset]"
          id="circle1"
          src="/Frame 1000003358.svg"
          alt="Decorative"
        />
      </div>
      <div className="md:px-[70px] mx-auto mt-10">
        <div className="relative bg-[#130C0C]">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="relative px-4 pb-10 pt-10 sm:pt-10 lg:static lg:py-20">
              <div className="mx-auto lg:mx-0 lg:max-w-lg flex flex-col justify-between gap-20">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Do you have an idea in mind? We'd love to hear from you.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    We’re happy to talk about your project details. Share your
                    thoughts with us, or hit us up to simply learn about the
                    services we have to offer.
                  </p>
                </div>
                <div className="happy-clients w-100">
                  <h2>Meet our happy clients</h2>
                  <div className="slider-sec slider-contact">
                    <Swiper
                      breakpointsInverse={true}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 4,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 5,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1030: {
                          slidesPerView: 2.1,
                          spaceBetween: 10,
                        },
                      }}
                      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                      spaceBetween={0}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                          <CardCustomer
                            SubHeading={testimonial.attributes.description}
                            Title={testimonial.attributes.Name}
                            SubProfile={testimonial.attributes.position}
                            imageSrc= {`https://strapi.softylus.com/${testimonial.attributes.imageSrc?.data?.attributes?.url}` || '/default-image.jpg'}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <form
              action="#"
              method="POST"
              className="px-4 pb-10 pt-10 sm:pt-10 lg:static lg:py-20"
              onSubmit={handleSubmit}
            >
              <div className="mx-auto lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Name"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Phone number"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="emailaddress@email.com"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Message"
                        rows="4"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                    <ReCAPTCHA
                      style={{ marginTop: "1.5rem" }}
                      sitekey="6Le8I9QpAAAAANFDoyNMJ8k-jxeHYBSaoWDDOlDg"
                      onChange={handleVerification}
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
                  >
                    Get free consultation
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;
