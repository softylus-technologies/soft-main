import React from "react";
import BlogCard from "../blog-card/BlogCard";

const blogs = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing and",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    url: "",
    id: 1,
    imgUrl: "/coding.gif",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    url: "",
    id: 2,
    imgUrl: "/coding.gif",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    url: "",
    imgUrl: "/coding.gif",
    id: 3,
  },
];
function BlogSection() {
  return (
    <section className="mx-2 md:mx-auto py-10 relative h-full">
      <h1 className="text-3xl md:text-5xl text-center my-10">
        Our Latest Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {blogs.map((item) => (
          <BlogCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
