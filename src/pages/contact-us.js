import React, { useState, useEffect, useRef, useCallback } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import "../style/ContactUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardCustomer } from "../components/CardCustomer";
import Seo from "../components/seo";
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import send from "../../static/send.json";
import faild from "../../static/faild.json";

function ContactForm() {
  const intl = useIntl();
  const locale = intl.locale
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);
  const playerRef = useRef(null);
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };   

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert(intl.formatMessage({ id: "contactForm.captchaAlert" }));
      return;
    }
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post("https://strapi.softylus.com/api/contact-uses", 
        { 
          data: formData,
          captchaToken: captchaToken 
        }, 
        {
          headers: {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd` 
          }
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: ''
        });
        setCaptchaToken(null);
        if (window.turnstile && turnstileWidgetId.current) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleAnimationComplete = () => {
    if (playerRef.current) {
      const totalFrames = playerRef.current.getTotalFrames();
      playerRef.current.setSeeker(totalFrames - 1, false);
    }
  };

  const renderTurnstile = useCallback(() => {
    if (window.turnstile && turnstileRef.current) {
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: '0x4AAAAAAAgL69K4ZNWucSrW',
        callback: function(token) {
          setCaptchaToken(token);
        },
      });
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = renderTurnstile;

    return () => {
      document.body.removeChild(script);
      if (window.turnstile && turnstileWidgetId.current) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, [renderTurnstile]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`https://strapi.softylus.com/api/testimonials?locale=${locale}&populate=picture`, {
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
    <Layout>
      <Seo 
        title={intl.formatMessage({ id: "contactForm.seoTitle" })}
        description={intl.formatMessage({ id: "contactForm.seoDescription" })}
      />
     
        <div className="container">
          <img
            className="circle-sec !left-[unset]"
            id="circle1"
            src="/Frame 1000003358.svg"
            alt={intl.formatMessage({ id: "contactForm.decorativeImageAlt" })}
          />
        </div>
        <div className="md:px-[70px] mt-10 ContactForm-section">
          <div className="relative bg-[#130C0C] ContactForm-container">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 ContactForm-content">
              <div className="relative px-4 pb-10 pt-10 sm:pt-10 lg:static lg:py-20 w-6/12">
                <div className="lg:mx-0 flex flex-col justify-between gap-20">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      <FormattedMessage id="contactForm.heading" />
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      <FormattedMessage id="contactForm.subheading" />
                    </p>
                  </div>
                  <div className="happy-clients w-100">
                    <h2><FormattedMessage id="contactForm.happyClientsHeading" /></h2>
                    <div className="slider-sec slider-contact">
                      <Swiper
                        breakpointsInverse={true}
                        breakpoints={{
                          640: { slidesPerView: 2, spaceBetween: 4 },
                          768: { slidesPerView: 2, spaceBetween: 20 },
                          1024: { slidesPerView: 2, spaceBetween: 10 },
                          1030: { slidesPerView: 2.1, spaceBetween: 10 },
                        }}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        loop={true}
                        pagination={{ clickable: true }}
                      >
                        {testimonials.map((testimonial) => (
                          <SwiperSlide key={testimonial.id}>
                            <CardCustomer
                              SubHeading={testimonial.attributes.opinion}
                              Title={testimonial.attributes.Name}
                              SubProfile={testimonial.attributes.position}
                              imageSrc={`https://strapi.softylus.com/${testimonial.attributes.picture?.data?.attributes?.url}` || '/default-image.jpg'}
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
                className="px-4 pb-10 pt-10 sm:pt-10 lg:static lg:py-20 w-6/12 contact-us-form"
                onSubmit={handleSubmit}
                
              >
                <div className="mx-auto lg:mr-0 lg:max-w-lg">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                        <FormattedMessage id="contactForm.nameLabel" />
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder={intl.formatMessage({ id: "contactForm.namePlaceholder" })}
                          className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-white">
                        <FormattedMessage id="contactForm.phoneLabel" />
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder={intl.formatMessage({ id: "contactForm.phonePlaceholder" })}
                          className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                        <FormattedMessage id="contactForm.emailLabel" />
                      </label>
                      <div className="mt-2.5">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder={intl.formatMessage({ id: "contactForm.emailPlaceholder" })}
                          className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                        <FormattedMessage id="contactForm.messageLabel" />
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder={intl.formatMessage({ id: "contactForm.messagePlaceholder" })}
                          rows="4"
                          className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
                    <div className="checkbox mb-3">
                      <div ref={turnstileRef}></div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-start">
          {submitStatus !== 'success' && submitStatus !== 'error' && (
            <button
              type="submit"
              disabled={submitting}
              className="no-underline inline-flex items-center justify-center w-60 h-14 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10"
            >
              {submitting ? 
                <FormattedMessage id="contactForm.sending" /> : 
                <FormattedMessage id="contactForm.submit" />
              }
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
          )}
          {submitStatus === 'success' && (
            <button type="button" disabled className="no-underline inline-flex items-center justify-center w-60 h-14 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10">
              <Player
                ref={playerRef}
                autoplay
                keepLastFrame
                src={send}
                style={{ height: '50px', width: '50px' }}
                onComplete={handleAnimationComplete}
              />
            </button>
          )}
          {submitStatus === 'error' && (
            <button type="button" disabled className="no-underline inline-flex items-center justify-center h-14 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-60">
              <Player
                ref={playerRef}
                autoplay
                keepLastFrame
                src={faild}
                style={{ height: '50px', width: '50px' }}
                onComplete={handleAnimationComplete}
              />
            </button>
          )}
        </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Layout>
    );
  }
  
  export default ContactForm;