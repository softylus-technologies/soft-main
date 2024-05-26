import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import Seo from '../components/seo';
import { Link } from "gatsby";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../components/style/BlogDetail.css"
const BlogDetail = () => {
  const location = useLocation(); // Get the location object
  const params = new URLSearchParams(location.search); // Parse the query parameters
  const id = params.get('id'); // Get the 'id' parameter

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://strapi.softylus.com/api/blogs/${id}?populate=img`, {
          headers: {
            'Authorization': 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd'
          }
        });
        const data = await response.json();
        setBlog(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog detail:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const { attributes } = blog;
  const imgUrl = attributes.img?.data?.attributes?.url
    ? `https://strapi.softylus.com${attributes.img.data.attributes.url}`
    : '/default-image.jpg';

  return (
  <>    
  <NavBar />
    <Seo
        title={`Blog - ${attributes.title}`}
        description={attributes.description.map((desc) =>
          desc.children.map((child) => child.text).join(' ')
        ).join(' ')}
      />
      <section className='BlogDetail-sec md:px-[70px] mx-auto '>
        <div className='BlogDetail-container'>
          {/* <Link to="/blogs"><button>Back<img src='/RA.png' alt="Back"/></button></Link> */}
          <div className='BlogDetail-card'>
            <div className='BlogDetail-card-info'>
            <h1 className=''>{attributes.tilte}</h1>
            <img src={imgUrl} alt={attributes.tilte} />
              <div className='BlogDetail-des'>
                {attributes.description.map((desc, index) => (
                  <p key={index}>
                    {desc.children.map((child, childIndex) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </>

  );
};

export default BlogDetail;
