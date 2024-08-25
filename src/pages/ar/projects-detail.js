import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import FooterCon from '../../components/FooterCon';
import { useLocation } from '@reach/router';
import "../../style/projects.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectDiscussion from "../../components/project-discussion.js";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { LanguageContext } from '../../context/LanguageContext';

const SliderButtons = () => {
  const swiper = useSwiper();
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    const updateSlideStatus = () => {
      setIsFirstSlide(swiper.isBeginning);
      setIsLastSlide(swiper.isEnd);
    };

    swiper.on('slideChange', updateSlideStatus);

    return () => {
      swiper.off('slideChange', updateSlideStatus);
    };
  }, [swiper]);

  return (
    <div className="btn-sliider">
      <button
        onClick={() => swiper.slidePrev()}
        className={isFirstSlide ? 'btn-slide prev disabled' : 'btn-slide prev'}
        style={{ transform: 'rotate(180deg)' }}
        aria-label="الشريحة السابقة"
      >
        <img src='/Frame 1000003367.png' alt="سهم الشريحة السابقة" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={isLastSlide ? 'btn-slide next disabled' : 'btn-slide next'}
        aria-label="الشريحة التالية"
      >
        <img src='/Frame 1000003367.png' alt="سهم الشريحة التالية" />
      </button>
    </div>
  );
};

const ProjectDetail = ({ params, location }) => {
  const [slug, setSlug] = useState(null);
  const [project, setProject] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    // Try to get slug from params (for file-based routing)
    let extractedSlug = params?.slug;

    // If not found in params, try to get from location (for query params)
    if (!extractedSlug && location) {
      const searchParams = new URLSearchParams(location.search);
      extractedSlug = searchParams.get('slug');
    }

    // If still not found, try to get from pathname (for dynamic routing)
    if (!extractedSlug && location) {
      const pathParts = location.pathname.split('/');
      extractedSlug = pathParts[pathParts.length - 1];
    }

    console.log("Extracted slug:", extractedSlug);
    setSlug(extractedSlug);
  }, [params, location]);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) {
        console.error('No slug available to fetch project');
        return;
      }

      
      try {
        const url = `https://strapi.softylus.com/api/projects?filters[slug][$eq]=${slug}&locale=ar&populate=images,TechnologyUsed`;
        console.log("API URL:", url);

        const response = await axios.get(url, {
          headers: {
            Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd',
          },
        });

        console.log("API response:", response.data);
        
        if (response.data.data.length > 0) {
          setProject(response.data.data[0]);
          
          
        } else {
          console.error('Project not found');
        }
      } catch (error) {
        console.error('Error fetching project data: ', error);
      }
    };

    if (slug) {
      fetchProject();
    }
  }, [slug]);

  if (!slug) {
    return <div></div>;
  }

  if (!project) {
    return <div>جاري التحميل...</div>;
  }
  const { attributes } = project;
  const { title, description, builtIn, tag, price, images, TechnologyUsed } = attributes;

  const renderPrice = (price) => {
    const maxPrice = 6;
    const dollarSigns = [];
    for (let i = 1; i <= maxPrice; i++) {
      dollarSigns.push(
        <span key={i} style={{ opacity: i <= price ? 1 : 0.3 }}>$ </span>
      );
    }
    return dollarSigns;
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <Layout>
      <Seo
        title={`${title} | تفاصيل المشروع`}
        description={`استكشف تفاصيل ${description}`}
      />
     
        <section className='project-detail-sec md:px-[70px] mx-auto py-10 pl-4 pr-4'> 
          <div className='blurred-circle'></div>
          <div className="project-detail-conntent">
            <div className='project-detail-title'>
              <p className='project-detail-border project-detail-border-tag'>{tag}</p>
              <div>
                <h1>{title}</h1>
                <div className="project-detail-image project-detail-image-mobile">
                  <Swiper
                    className="swiper-Discover"
                    breakpoints={{
                      900: { slidesPerView: 1, spaceBetween: 40 },
                      1070: { slidesPerView: 1, spaceBetween: 50 },
                      1300: { slidesPerView: 2.5, spaceBetween: 50 },
                      1640: { slidesPerView: 2.5, spaceBetween: 50 },
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    direction="horizontal"
                    scrollbar={{ draggable: true }}
                  >
                    {images.data.map(image => (
                      <SwiperSlide key={image.id} className="swiper-Discover-Slide">
                        <img
                          src={`https://strapi.softylus.com${image.attributes.url}`}
                          alt={image.attributes.name}
                          onClick={() => openModal(image)}
                          style={{ cursor: 'pointer' }}
                        />
                      </SwiperSlide>
                    ))}
                    <SliderButtons />
                  </Swiper>
                </div>
                <p>{description}</p>
              </div>
              <div className='project-detail-someDetail'>
                <p className='project-detail-border'>{builtIn}</p>
                <p className='project-detail-border'>{renderPrice(price)}</p>
                {TechnologyUsed.data.map(tech => (
                  <div key={tech.id} className='project-detail-border-wrapper'>
                    <img
                      src={`https://strapi.softylus.com${tech.attributes.url}`}
                      alt={tech.attributes.name}
                      className='project-detail-border project-detail-icon'
                    />
                  </div>
                ))}
              </div>
              <div className="mb-14 project-detail-someDetail-button">
                <Link
                  to={`/${locale}/contact-us`}
                  className="no-underline inline-flex items-center justify-center px-5 py-[12px] text-base font-semibold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
                >
                 ابنِ لي واحداً!
                </Link>
              </div>
            </div>
            <div className="project-detail-image">
              <Swiper
                className="swiper-Discover"
                breakpoints={{
                  900: { slidesPerView: 1, spaceBetween: 40 },
                  1070: { slidesPerView: 1, spaceBetween: 50 },
                  1300: { slidesPerView: 2.5, spaceBetween: 50 },
                  1640: { slidesPerView: 2.5, spaceBetween: 50 },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={0}
                direction="horizontal"
                scrollbar={{ draggable: true }}
              >
                {images.data.map(image => (
                  <SwiperSlide key={image.id} className="swiper-Discover-Slide">
                    <img
                      src={`https://strapi.softylus.com${image.attributes.url}`}
                      alt={image.attributes.name}
                      onClick={() => openModal(image)}
                      style={{ cursor: 'pointer' }}
                    />
                  </SwiperSlide>
                ))}
                <SliderButtons />
              </Swiper>
            </div>
          </div>
        </section>
        <ProjectDiscussion />
        <FooterCon
          titleId="projectDetail.footerCon.title"
          titleOverSpanId="projectDetail.footerCon.titleOverSpan"
          subHeadingId="projectDetail.footerCon.subHeading"
          buttonTitleId="projectDetail.footerCon.buttonTitle"
        />
     
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="max-w-7xl max-h-4xl p-4 w-full">
            <img
              src={`https://strapi.softylus.com${modalImage.attributes.url}`}
              alt={modalImage.attributes.name}
              className="max-w-full max-h-full object-contain w-full"
            />
          </div>
        </div>
      )}
       </Layout>
  );
}

export default ProjectDetail;