import React, { useEffect, useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";
import BlogCard from "../../components/blog-card/BlogCard";
import axios from "axios";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import AppWrapper from "../../components/AppWrapper";
import Seo from "../../components/seo";
import "../../style/index.css";
import "../../components/style/Blog.css";

const Blog = ({ pageContext }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://strapi.softylus.com/api/blogs?populate=*&locale=en`,
          {
            headers: {
              Authorization:
                "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd",
            },
          }
        );
        const blogsData = response.data.data.map((blog) => {
          const content = blog.attributes.Content.map((block) =>
            block.children.map((child) => child.text).join(" ")
          ).join("\n");

          return {
            title: blog.attributes.Title,
            content: content,
            slug: blog.attributes.Slug,
            id: blog.id,
            url: `${blog.attributes.Slug}`,
            imgUrl: blog.attributes.Featured_Image?.data
              ? `https://strapi.softylus.com${blog.attributes.Featured_Image.data.attributes.url}`
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

  const blogContent = (
    <section className="md:mx-auto py-10 md:px-[70px] relative h-full flex flex-col items-center blog-cover">
      <div className="heading">
        <h1 className="text-center margin-zero font-bold blog-heading">
          <FormattedMessage id="blog.pageTitle" defaultMessage="Our blog" />
        </h1>
        <p className="text-center max-w-4xl">
          <FormattedMessage
            id="blog.pageDescription"
            defaultMessage="Dive into the digital frontier: Unraveling the latest trends, expert insights, and in-depth analyses in software development – your go-to resource for navigating the ever-evolving landscape of technology."
          />
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 blog-card-group">
        {blogs.map((item) => (
          <BlogCard item={item} key={item.id} className="h-full" />
        ))}
      </div>
    </section>
  );

  return (
    <AppWrapper pageContext={pageContext}>
      <Layout>
        <Seo
          title="Softylus Blog | Your Guide to Software Development Trends & Insights"
          description="Stay ahead in the digital age with the Softylus blog. Discover the latest trends, expert insights, and comprehensive guides on software development, DevOps, edge computing, and more. Explore in-depth analyses and stay informed on the ever-evolving tech landscape."
        />
        {blogContent}
        <FooterCon
          titleId="blog.footerCon.title"
          titleOverSpanId="blog.footerCon.titleOverSpan"
          subHeadingId="blog.footerCon.subHeading"
        />
      </Layout>
    </AppWrapper>
  );
};

export default Blog;
