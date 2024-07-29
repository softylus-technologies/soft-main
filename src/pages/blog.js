import React, { useEffect, useState } from "react";
import BlogCard from "../components/blog-card/BlogCard";
import axios from "axios";
import FooterCon from "../components/FooterCon";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/index.css"
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

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
            title: blog.attributes.tilte, // Corrected the typo from 'tilte' to 'title'
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

  return (<>
  <NavBar/>
    <section className="mx-2 md:mx-auto py-10 relative h-full flex flex-col items-center">
       <h1 className="text-center mt-20 margin-zero font-bold">Our blog</h1>
        <p className="text-center max-w-4xl mb-20 mt-6">
          Dive into the digital frontier: Unraveling the latest trends, expert insights, and in-depth analyses in software development – your go-to resource for navigating the ever-evolving landscape of technology.
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 blog-card-group">
        {blogs.map((item) => (
          <BlogCard item={item} key={item.id} className=" h-full "/>
        ))}
      </div>
    </section>
    <FooterCon
        Title="See if"
        TitleOverSpan="is right for you.Let's Create Something Exceptional Together"
        SubHeading="is right for you.Let's Create Something Exceptional Together"
      />
    <Footer/>
    </>
  );
};

export default Blog;
