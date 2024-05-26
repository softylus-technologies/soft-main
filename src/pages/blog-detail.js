import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../components/style/BlogDetail.css";
import FooterCon from "../components/FooterCon";
import { useLocation } from "@reach/router";

const BlogDetail = () => {
  const location = useLocation(); // Get the location object
  const params = new URLSearchParams(location.search); // Parse the query parameters
  const id = params.get("id"); // Get the 'id' parameter

  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://strapi.softylus.com/api/blogs?populate=img&sort=createdAt:desc",
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
            title: blog.attributes.title,
            desc: description,
            url: blog.attributes.url || "#",
            id: blog.id,
            imgUrl: blog.attributes.img.data
              ? `https://strapi.softylus.com${blog.attributes.img.data.attributes.url}`
              : "/default-image.jpg",
          };
        });

        setBlogs(blogsData);

        // Set the selected blog based on the 'id' parameter
        if (id) {
          const selected = blogsData.find((blog) => blog.id === parseInt(id));
          setSelectedBlog(selected);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [id]);

  const handleBlogClick = (id) => {
    const selected = blogs.find((blog) => blog.id === id);
    setSelectedBlog(selected);
  };

  return (
    <>
      <NavBar />
      <section className="md:px-[70px] mx-auto flex justify-center flex-col items-center pl-4 pr-4">
        <h1 className="text-center mt-20">Our latest news</h1>
        <p className="text-center max-w-4xl mb-20 mt-6">
          Dive into the digital frontier: Unraveling the latest trends, expert insights, and in-depth analyses in software development – your go-to resource for navigating the ever-evolving landscape of technology.
        </p>
        <div className="blog-container">
          <div className="blog-list  pl-4 pr-4 pb-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card-list " onClick={() => handleBlogClick(blog.id)}>
                <img src={blog.imgUrl} alt={blog.title} />
                <div className="blog-card-list-content">
                  <h6 className="clamp-3-lines">{blog.title}</h6>
                  <p className="clamp-2-lines line-height-p">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedBlog && (
            <div className="show-post  pl-4 pr-4">
              <img src={selectedBlog.imgUrl} alt={selectedBlog.title} />
              <div className="blog-card-big-content">
                <h1 className="mt-4 h6-size md:mt-0">{selectedBlog.title}</h1>
                <p className="mt-4 line-height-p">{selectedBlog.desc}</p>
              </div>
            </div>
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

export default BlogDetail;
