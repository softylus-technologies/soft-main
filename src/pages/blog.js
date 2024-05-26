import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../components/style/BlogDetail.css";
import FooterCon from "../components/FooterCon";
import { Link } from "gatsby";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://strapi.softylus.com/api/blogs?populate=img",
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
            detailUrl: `/blog-detail/?id=${blog.id}`,
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
    <>
      <NavBar />
      <section className="md:px-[70px] mx-auto  flex justify-center flex-col items-center pl-4 pr-4">
        <h1 className=" text-center mt-20">Our latest news</h1>
        <p className=" text-center max-w-4xl mb-20 mt-6">Dive into the digital frontier: Unraveling the latest trends, expert insights, and in-depth analyses in software development – your go-to resource for navigating the ever-evolving landscape of technology.</p>
        <div className="blog-container">
          <div className="blog-list">
            {blogs.slice(0, -1).map((blog) => (
              <Link to={blog.detailUrl} >
              <div key={blog.id} className="blog-card-list">
                <img src={blog.imgUrl} alt={blog.title} />
                <div className="blog-card-list-content">
                <h6 className="clamp-3-lines">{blog.title}</h6>
                <p className="clamp-2-lines line-height-p">{blog.desc}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
          {blogs.length > 0 && (
            <Link to={blogs[blogs.length - 1].detailUrl}>
            <div key={blogs[blogs.length - 1].id} className="blog-card-big">
              <img src={blogs[blogs.length - 1].imgUrl} alt={blogs[blogs.length - 1].title} />
              <div className="blog-card-big-content">
              <h3 className="mt-4 h6-size clamp-3-lines md:mt-0">{blogs[blogs.length - 1].title}</h3>
              <p className="clamp-4-lines mt-4 line-height-p">{blogs[blogs.length - 1].desc}</p>
              </div>
            </div>
            </Link>
          )}
        </div>
      </section>
      <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let’s make something great"
        SubHeading="is right for you.Let’s make something great"
      />
      <Footer />
    </>
  );
};

export default Blog;
