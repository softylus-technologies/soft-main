import React, { useEffect, useState, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import Layout from "../../components/layout";
import "../../components/style/BlogDetail.css";
import FooterCon from "../../components/FooterCon";
import DOMPurify from 'dompurify';
import Seo from "../../components/seo";
import { useLocation } from "@reach/router";

const BlogDetail = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");

  const [blog, setBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);

  const fetchBlog = useCallback(async () => {
    if (!slug) return;

    try {
      const response = await axios.get(
        `https://strapi.softylus.com/api/blogs?filters[Slug][$eq]=${slug}&populate=*&locale=ar`,
        {
          headers: {
            Authorization: "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd",
          },
        }
      );

      if (response.data.data.length > 0) {
        const blogData = response.data.data[0];
        setBlog({
          id: blogData.id,
          title: blogData.attributes.Title,
          slug: blogData.attributes.Slug,
          description: blogData.attributes.Meta_Description,
          content: blogData.attributes.Content,
          featuredImage: {
            url: blogData.attributes.Featured_Image?.data
              ? `https://strapi.softylus.com${blogData.attributes.Featured_Image.data.attributes.url}`
              : "/default-image.jpg",
            alt: blogData.attributes.Featured_Image?.data?.attributes?.alternativeText || blogData.attributes.Title,
          },
          author: blogData.attributes.Author,
          publicationDate: blogData.attributes.createdAt,
          updatedDate: blogData.attributes.updatedAt,
          categories: blogData.attributes.categories?.data.map(category => category.attributes.Category) || [],
          tags: blogData.attributes.tags?.data.map(tag => tag.attributes.Tag) || [],
          seoTitle: blogData.attributes.SEO_Title,
          canonicalUrl: blogData.attributes.Canonical_URL,
          focusKeyword: blogData.attributes.Focus_Keyword,
        });
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }, [slug]);

  const fetchOtherBlogs = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://strapi.softylus.com/api/blogs?populate=*&locale=ar&pagination[limit]=3`,
        {
          headers: {
            Authorization: "Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd",
          },
        }
      );

      const otherBlogsData = response.data.data
        .filter(blogData => blogData.attributes.Slug !== slug)
        .map(blogData => ({
          id: blogData.id,
          title: blogData.attributes.Title,
          slug: blogData.attributes.Slug,
          content: blogData.attributes.Content,
          featuredImage: {
            url: blogData.attributes.Featured_Image?.data
              ? `https://strapi.softylus.com${blogData.attributes.Featured_Image.data.attributes.url}`
              : "/default-image.jpg",
            alt: blogData.attributes.Featured_Image?.data?.attributes?.alternativeText || blogData.attributes.Title,
          },
        }));

      setOtherBlogs(otherBlogsData);
    } catch (error) {
      console.error("Error fetching other blogs:", error);
    }
  }, [ slug]);

  useEffect(() => {
    fetchBlog();
    fetchOtherBlogs();
  }, [fetchBlog, fetchOtherBlogs]);

  const convertContentToHtml = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'heading':
          return React.createElement(
            `h${item.level}`, 
            { key: index }, 
            item.children.map(child => child.text).join('')
          );
        case 'paragraph':
          return (
            <p key={index}>
              {item.children.map((child, childIndex) => {
                if (child.type === 'text') {
                  let text = child.text;
                  return child.bold ? <strong key={childIndex}>{text}</strong> : text;
                } else if (child.type === 'link') {
                  return (
                    <a key={child.url} href={child.url}>
                      {child.children.map(linkChild => linkChild.text).join('')}
                    </a>
                  );
                }
                return null; // Handle any unexpected child types
              })}
            </p>
          );
        case 'list':
          const ListTag = item.format === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag key={index}>
              {item.children.map((li, liIndex) => (
                <li key={liIndex}>
                  {li.children.map((child, childIndex) => {
                    if (child.type === 'text') {
                      let text = child.text;
                      return child.bold ? <strong key={childIndex}>{text}</strong> : text;
                    }
                    return null; // Ignore non-text children
                  }).reduce((prev, curr) => [prev, ' ', curr])}
                </li>
              ))}
            </ListTag>
          );
        default:
          return null; // Return null for unhandled types
      }
    });
  };
  if (!blog) {
    return <div>جاري تحميل المقال...</div>;
  }

  const htmlContent = convertContentToHtml(blog.content);

  return (
    <Layout>
      <Seo 
        title={blog.seoTitle || blog.title}
        description={blog.description}
      />
      <section className="md:px-[70px] mx-auto flex justify-center flex-col items-center pl-4 pr-4 mt-20">
        <div className="blog-container">
          <div className="show-post pl-4 pr-4">
            <div className="blog-metadata">
              <p>التصنيفات: {blog.categories.join(", ")}</p>
              <p>الوسوم: {blog.tags.join(", ")}</p>
            </div>
            <img src={blog.featuredImage.url} alt={blog.featuredImage.alt} className="desktop"/>
            <div className="blog-card-big-content">
              <h1 className="mt-4 md:mt-0">{blog.title}</h1>
              <img src={blog.featuredImage.url} alt={blog.featuredImage.alt} className="mobile"/>
              <div className="mt-4 line-height-p dangerouslySetInnerHTML">
                {htmlContent}
              </div>
            </div>
          </div>
          <div className="blog-list pl-4 pr-4 pb-6">
            {otherBlogs.map(blog => (
              <div key={blog.id} className="blog-card-list" onClick={() => window.location.href = `/blog-detail/?slug=${blog.slug}`}>
                <img src={blog.featuredImage.url} alt={blog.featuredImage.alt} />
                <div className="blog-card-list-content">
                  <h2 className="clamp-3-lines md:font-normal font-normal-css">{blog.title}</h2>
                  <div className="blog-description">
                    {/* Truncate description logic here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterCon
        titleId="blogDetail.footerCon.title"
        titleOverSpanId="blogDetail.footerCon.titleOverSpan"
        subHeadingId="blogDetail.footerCon.subHeading"
      />
    </Layout>
  );
};

export default BlogDetail;