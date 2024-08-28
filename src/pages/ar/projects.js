import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "../../style/projects.css";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import Footer from "../../components/Footer";
import { Link } from "gatsby";
import Seo from '../../components/seo';
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet } from "react-helmet"; // Import Helmet

const ProjectCard = ({ images, title, link, onClick, isActive, className }) => {
  const { locale } = useContext(LanguageContext);

  return (
    <Link rel="canonical"  to={`/${locale}${link}`}>
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
  const { locale } = useContext(LanguageContext);

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
  }, [locale]);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout> 
      <Helmet>
        <title>مشاريعنا | عرض ابتكارات Softylus</title>
        <meta name="description" content="استكشف محفظة مشاريعنا المنجزة. من تطبيقات الويب إلى منصات الموبايل، شاهد كيف دفعت حلولنا المبتكرة الشركات إلى الأمام" />
        <meta name="keywords" content="مشاريعنا, Softylus,  تطوير الويب, تطبيقات الموبايل, حلول تقنية, محفظة المشاريع,  تطوير البرمجيات,  التصميم" />
      </Helmet>

      <Seo 
        title="مشاريعنا | عرض ابتكارات Softylus"
        description="استكشف محفظة مشاريعنا المنجزة. من تطبيقات الويب إلى منصات الموبايل، شاهد كيف دفعت حلولنا المبتكرة الشركات إلى الأمام"
      />
      
  
        <div className='sec-project'>
          <div className='title-project'>
            <h1>
            تفقد بعض المشاريع الحديثة 
            </h1>
            <p>
            الحائزة على جوائز إلى تطوير الويب الأنيق والسلس، نبني منتجات تزدهر عند تقاطع أهداف العمل واحتياجات المستخدم.
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
