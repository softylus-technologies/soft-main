import React, { useState, useEffect, useContext } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../../../components/layout";
import DetailHeader from "../../../components/DetailHeader";
import DetailHero from "../../../components/DetailHero";
import FooterCon from "../../../components/FooterCon";
import DetailSec from "../../../components/DetailSec";
import "../../../style/DetailSeo.css";
import detailDataEn from "../../../sources/DetailSeo-en.json";
import detailDataAr from "../../../sources/DetailSeo-ar.json";
import ServicesExplain from "../../../components/ServicesExplain";
import Seo from "../../../components/seo";
import { Helmet } from "react-helmet"; // Import Helmet
import { LanguageContext } from '../../../context/LanguageContext'; 

const DetailSeo = () => {
  const [details, setDetails] = useState([]);
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    setDetails(locale === "en" ? detailDataEn : detailDataAr);
  }, [locale]);

  return (
    <Layout>
      <Helmet>
        <title>خدمات تحسين محركات البحث | تكنولوجيا Softylus</title>
        <meta name="description" content="اكتشف خدمات تحسين محركات البحث الخبيرة من Softylus Technologies. نساعد الشركات على تحقيق أهدافها عبر الإنترنت من خلال استراتيجيات قائمة على البيانات وتكتيكات مثبتة" />
        <meta name="keywords" content="تحسين محركات البحث, SEO, تحسين محركات البحث, استراتيجيات SEO, تحسين محتويات SEO,  تدقيق SEO,  تحليلات SEO,  Softylus,  خدمات تحسين محركات البحث" />
      </Helmet>

      <Seo
        // Use Seo component for other meta tags
        title="خدمات تحسين محركات البحث | تكنولوجيا Softylus"
        description="اكتشف خدمات تحسين محركات البحث الخبيرة من Softylus Technologies. نساعد الشركات على تحقيق أهدافها عبر الإنترنت من خلال استراتيجيات قائمة على البيانات وتكتيكات مثبتة"
      />

      <DetailHeader
        Title={<FormattedMessage id="detailSeo.header.title" />}
        TitleOverSpan={<FormattedMessage id="detailSeo.header.titleOverSpan" />}
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title={<FormattedMessage id="detailSeo.hero.title" />}
          SubHeading={<FormattedMessage id="detailSeo.hero.subHeading" />}
          imageSrc="/Images DetailSeo.svg"
        />

        {details.map((detail, index) => {
          const className = index % 2 === 0 ? "section-image-right" : "section-image-left";

          if (index === 3) {
            return (
              <ServicesExplain
                key={index}
                imageSrc="https://strapi.softylus.com/uploads/Frame_1000003381_ea2f26280c.svg"
                logo="/salislogo.png"
                Title={<FormattedMessage id="detailSeo.caseStudy.title" />}
                SubHeading={<FormattedMessage id="detailSeo.caseStudy.subHeading" />}
                buttonText={<FormattedMessage id="detailSeo.caseStudy.buttonText" />}
                className="btn-ServicesExplain-hide"
              />
            );
          } else if (index === 4) {
            return (
              <DetailHero
                key={index}
                Title={<FormattedMessage id="detailSeo.customSolutions.title" />}
                SubHeading={<FormattedMessage id="detailSeo.customSolutions.subHeading" />}
                imageSrc="/Image right DetailSeo.svg"
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
        titleId="detailSeo.footerCon.title"
        titleOverSpanId="detailSeo.footerCon.titleOverSpan"
        subHeadingId="detailSeo.footerCon.subHeading"
        buttonTitleId="detailSeo.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailSeo;
