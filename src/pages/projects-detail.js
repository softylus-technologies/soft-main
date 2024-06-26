import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FooterCon from '../components/FooterCon';
import { useLocation } from '@reach/router';
import "../style/projects.css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectDiscussion from "../components/project-discussion.js";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Link } from "gatsby";

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
      >
        <img src='/Frame 1000003367.png' />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={isLastSlide ? 'btn-slide next disabled' : 'btn-slide next'}
      >
        <img src='/Frame 1000003367.png' />
      </button>
    </div>
  );
};

const ProjectDetail = () => {
  const location = useLocation(); // Get the location object
  const params = new URLSearchParams(location.search); // Parse the query parameters
  const id = params.get('id'); // Get the 'id' parameter

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `https://strapi.softylus.com/api/projects/${id}?populate=images,TechnologyUsed`,
          {
            headers: {
              Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd',
            },
          }
        );

        setProject(response.data.data);
      } catch (error) {
        console.error('Error fetching project data: ', error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const { attributes } = project;
  const { title, description, builtIn, tag, price, images, TechnologyUsed } = attributes;

  // Function to generate dollar signs with different opacities
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

  return (
    <>
      <NavBar />
      <section className='project-detail-sec md:px-[70px] mx-auto  py-10 pl-4 pr-4'> 
        <div className="project-detail-conntent">
            <div className='project-detail-title'>
                <p className='project-detail-border'>{tag}</p>
                <h1>{title}</h1>
                <p>{description}</p>
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
                <div className=" mb-14">
                  <Link
                    to="/contact-us"
                    className="no-underline inline-flex items-center justify-center px-4 py-[12px] text-base font-semibold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                  >
                    Build me one!
                  </Link>
                </div>
            </div>
            <div className="project-detail-image">
              <Swiper
                className="swiper-Discover"
                breakpoints={{
                  900: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1070: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1300: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                  1640: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={0}
                direction="horizontal"
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log('slide change')}
              >
                {images.data.map(image => (
                  <SwiperSlide key={image.id} className="swiper-Discover-Slide">
                    <img
                      src={`https://strapi.softylus.com${image.attributes.url}`}
                      alt={image.attributes.name}
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
        Title="See if"
        TitleOverSpan="is right for you.Let's Create Something Exceptional Together"
        SubHeading="Discover if Softylus is the right partner for your next project. Talk to us and get the expert help you need – no extra fees, free consultation."
      />
      <Footer />
    </>
  );
}

export default ProjectDetail;
