import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../../../components/layout";
import DetailHeader from "../../../components/DetailHeader";
import DetailHero from "../../../components/DetailHero";
import FooterCon from "../../../components/FooterCon";
import DetailSec from "../../../components/DetailSec";
import "../../../style/DetailSeo.css";
import detailDataEn from "../../../sources/DetailSMM-en.json";
import detailDataAr from "../../../sources/DetailSMM-ar.json";
import ServicesExplain from "../../../components/ServicesExplain";
import Seo from "../../../components/seo";
import { Helmet } from "react-helmet"; // Import Helmet
import { LanguageContext } from '../../../context/LanguageContext'; 

const DetailSMM = () => {
  const [details, setDetails] = useState([]);
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    setDetails(locale === "en" ? detailDataEn : detailDataAr);
  }, [locale]);

  return (
    <Layout>
      <Helmet>
        <title>أفضل خدمات إدارة وسائل التواصل الاجتماعي | Softylus Technologies</title>
        <meta name="description" content="اكتشف خدمات إدارة وسائل التواصل الاجتماعي المتميزة من Softylus Technologies. من إنشاء المحتوى إلى إدارة المجتمع، نحن ندفع المشاركة والنجاح عبر الإنترنت للشركات" />
        <meta name="keywords" content="التسويق عبر وسائل التواصل الاجتماعي, إدارة وسائل التواصل الاجتماعي,  إدارة المحتوى,  إدارة المجتمع,  إعلانات وسائل التواصل الاجتماعي, التسويق المؤثر, تحليلات وسائل التواصل الاجتماعي, Softylus, خدمات وسائل التواصل الاجتماعي" />
      </Helmet>

      <Seo
        // Use Seo component for other meta tags
        title="أفضل خدمات إدارة وسائل التواصل الاجتماعي | Softylus Technologies"
        description="اكتشف خدمات إدارة وسائل التواصل الاجتماعي المتميزة من Softylus Technologies. من إنشاء المحتوى إلى إدارة المجتمع، نحن ندفع المشاركة والنجاح عبر الإنترنت للشركات"
      />

      <DetailHeader
        Title={<FormattedMessage id="detailSMM.header.title" />}
        TitleOverSpan={<FormattedMessage id="detailSMM.header.titleOverSpan" />}
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title={<FormattedMessage id="detailSMM.hero.title" />}
          SubHeading={<FormattedMessage id="detailSMM.hero.subHeading" />}
          imageSrc="/Images SSM.svg"
        />

        {details.map((detail, index) => {
          const className = index % 2 === 0 ? "section-image-right" : "section-image-left";

          if (index === 3) {
            return (
              <ServicesExplain
                key={index}
                imageSrc="https://strapi.softylus.com/uploads/Frame_1000003378_2_028f6e7808.svg"
                logo="https://strapi.softylus.com/uploads/MZM_logo_transformed_2_ba18383981.svg"
                Title={<FormattedMessage id="detailSMM.caseStudy.title" />}
                SubHeading={<FormattedMessage id="detailSMM.caseStudy.subHeading" />}
                buttonText={<FormattedMessage id="detailSMM.caseStudy.buttonText" />}
                className="btn-ServicesExplain-hide"
              />
            );
          } else if (index === 4) {
            return (
              <DetailHero
                key={index}
                Title={<FormattedMessage id="detailSMM.customSolutions.title" />}
                SubHeading={<FormattedMessage id="detailSMM.customSolutions.subHeading" />}
                imageSrc="/Image right SMM.svg"
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
        titleId="detailSMM.footerCon.title"
        titleOverSpanId="detailSMM.footerCon.titleOverSpan"
        subHeadingId="detailSMM.footerCon.subHeading"
        buttonTitleId="detailSMM.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailSMM;