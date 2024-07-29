import React, { useEffect, useState } from "react";
import BlogCard from "../blog-card/BlogCard";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "../apply-form/ApplyForm.css"
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://strapi.softylus.com/api/blogs?populate=img&sort=createdAt:desc&pagination",
          {
            headers: {
              Authorization: "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd",
            },
          }
        );

        const blogsData = response.data.data.map((blog) => {
          const description = blog.attributes.description
            .map((desc) => desc.children.map((child) => child.text).join(" "))
            .join("\n");

          return {
            title: blog.attributes.tilte, 
            desc: description,
            url: blog.attributes.url || "#",
            id: blog.id,
            url: `/blog-detail/?id=${blog.id}`,
            imgUrl: blog.attributes.img.data
              ? `https://strapi.softylus.com${blog.attributes.img.data.attributes.url}`
              : "/default-image.jpg",
          };
        });

        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="latest-insights-section mx-2 md:mx-auto py-10 relative h-full">
      <div className="latest-insights-section-content">
      <h1 className="text-3xl md:text-5xl text-center">
        Latest Insights
      </h1>
      </div>
      {/* grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 */}
      <div className="articles-container">
        {blogs.map((item) => (
          <BlogCard item={item} key={item.id} heightType={blogs.length > 2 ? 'custom' : 'standard'} />
        ))}
      </div>
      <Swiper
                className="articles-container-card"
                breakpoints={{
                  375: {
                    slidesPerView: 1.4,
                    spaceBetween: 40,
                  },
                  900: {
                    slidesPerView: 1.5,
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
                spaceBetween={30}
                direction="horizontal"
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log('slide change')}
              >
                   {blogs.map((item) => (
         <SwiperSlide> <BlogCard item={item} key={item.id} heightType={blogs.length > 2 ? 'custom' : 'standard'} /></SwiperSlide>
        ))}

              </Swiper>
    </section>
  );
};

export default BlogSection;
