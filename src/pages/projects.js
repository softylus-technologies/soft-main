import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import "../style/projects.css";
import FooterCon from "../components/FooterCon";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import { Link } from "gatsby";
import Seo from '../components/seo';

const ProjectCard = ({ images, title, link, onClick, isActive, className }) => {
  return (
    <Link to={link}>
      <div className={`${className} card ${isActive ? 'active' : ''}`} onClick={onClick}>
        <div className="card-image">
          <img src={`https://strapi.softylus.com${images[0].attributes.url}`} alt={images[0].attributes.name} />
        </div>
      </div>
    </Link>
  );
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [projects, setProjects] = useState([]);
  const intl = useIntl();
  const locale = intl.locale;
  console.log(intl,"intl")
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`https://strapi.softylus.com/api/projects?locale=${locale}&populate=images`, {
          headers: {
            Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd'
          }
        });
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects data: ", error);
      }
    };

    fetchProjects();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout> 
      <Seo 
        title={intl.formatMessage({ id: "projects.seoTitle", defaultMessage: "Our Projects | Showcase of Softylus Innovations" })}
        description={intl.formatMessage({ id: "projects.seoDescription", defaultMessage: "Dive into our portfolio of completed projects. From web applications to mobile platforms, see how our innovative solutions have propelled businesses forward." })}
      />
      
  
        <div className='sec-project'>
          <div className='title-project'>
            <h1>
              <FormattedMessage
                id="projects.title"
                defaultMessage="Check Out a Few Recent Projects"
              />
            </h1>
            <p>
              <FormattedMessage
                id="projects.description"
                defaultMessage="From award-winning iOS and Android app development to elegant, seamless web development, we build products that thrive at the intersection of business goals and user needs."
              />
            </p>
          </div>
        </div>
        <div className="gallery">
          {projects.map((project, index) => (
            <ProjectCard
              className={project.attributes.className}
              key={index}
              images={project.attributes.images.data}
              title={project.attributes.title}
              link={`/projects-detail/?slug=${project.attributes.slug}`}
              onClick={() => handleClick(index)}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        <FooterCon
          titleId="projects.footerCon.title"
          titleOverSpanId="projects.footerCon.titleOverSpan"
          subHeadingId="projects.footerCon.subHeading"
          buttonTitleId="projects.footerCon.buttonTitle"
        />
      </Layout>   
  );
}

export default Projects;