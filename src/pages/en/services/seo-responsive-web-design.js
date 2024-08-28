import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../../../components/layout";
import DetailHeader from "../../../components/DetailHeader";
import DetailHero from "../../../components/DetailHero";
import FooterCon from "../../../components/FooterCon";
import DetailSec from "../../../components/DetailSec";
import "../../../style/DetailWebDev.css";
import detailDataEn from "../../../sources/DetailWebDev-en.json";
import detailDataAr from "../../../sources/DetailWebDev-ar.json";
import ServicesExplain from "../../../components/ServicesExplain";
import { Helmet } from "react-helmet"; // Import Helmet
import Seo from '../../../components/seo'; 
import { LanguageContext } from '../../../context/LanguageContext'; 

const DetailWebDev = () => {
  const [details, setDetails] = useState([]);
  const { locale } = useContext(LanguageContext); // Access locale from context

  useEffect(() => {
    setDetails(locale === "en" ? detailDataEn : detailDataAr);
  }, [locale]);

  return (
    <Layout>
      <Helmet>
        <title>Web Development Services | Softylus Technologies</title>
        <meta name="description" content="Explore our comprehensive web development services. From dynamic websites to e-commerce platforms, we deliver user-centric solutions that engage and convert." />
        <meta name="keywords" content="web development, website development, web design, web app development, e-commerce development, web services, front-end development, back-end development, Softylus, web developers" />
      </Helmet>

      <Seo
        url="https://softylus.com/en/services/seo-responsive-web-design/"
        // Use Seo component for other meta tags
        title="Web Development Services | Softylus Technologies"
        description="Explore our comprehensive web development services. From dynamic websites to e-commerce platforms, we deliver user-centric solutions that engage and convert."
      />

      <DetailHeader
        Title={<FormattedMessage id="detailWebDev.header.title" />}
        TitleOverSpan={<FormattedMessage id="detailWebDev.header.titleOverSpan" />}
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title={<FormattedMessage id="detailWebDev.hero.title" />}
          SubHeading={<FormattedMessage id="detailWebDev.hero.subHeading" />}
          imageSrc="/image 45.svg"
        />

        {details.map((detail, index) => {
          const className = index % 2 === 0 ? "section-image-right" : "section-image-left";

          if (index === 3) {
            return (
              <ServicesExplain
                key={index}
                imageSrc="/CASE STUDY IMG.svg"
                logo="/Vend.svg"
                Title={<FormattedMessage id="detailWebDev.caseStudy.title" />}
                SubHeading={<FormattedMessage id="detailWebDev.caseStudy.subHeading" />}
                buttonText={<FormattedMessage id="detailWebDev.caseStudy.buttonText" />}
                className="btn-ServicesExplain"
              />
            );
          } else if (index === 4) {
            return (
              <DetailHero
                key={index}
                Title={<FormattedMessage id="detailWebDev.whyMatters.title" />}
                SubHeading={<FormattedMessage id="detailWebDev.whyMatters.subHeading" />}
                imageSrc="/Image right.svg"
                className="right-img"
              />
            );
          } else {
            return (
              <DetailSec
                key={index}
                index={index}
                className={className}
                Title={detail.Title}
                SubHeading={detail.SubHeading}
                imageSrc={detail.imageSrc}
              />
            );
          }
        })}
      </div>
      <FooterCon
        titleId="detailWebDev.footerCon.title"
        titleOverSpanId="detailWebDev.footerCon.titleOverSpan"
        subHeadingId="detailWebDev.footerCon.subHeading"
        buttonTitleId="detailWebDev.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailWebDev;
