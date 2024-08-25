import React, { useState, useEffect } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../../components/layout";
import DetailHeader from "../../components/DetailHeader";
import DetailHero from "../../components/DetailHero";
import FooterCon from "../../components/FooterCon";
import DetailSec from "../../components/DetailSec";
import "../../style/DetailMobile.css";
import detailDataEn from "../../sources/DetailMobile-en.json";
import detailDataAr from "../../sources/DetailMobile-ar.json";
import ServicesExplain from "../../components/ServicesExplain";
import { Helmet } from "react-helmet"; // Import Helmet
import Seo from '../../components/seo'; // Keep Seo component for other meta tags

const DetailMobile = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // No need for `useIntl` here, we're using `FormattedMessage` directly
    setDetails(detailDataEn); // Default to English data
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Mobile App Development | Softylus Technologies</title>
        <meta name="description" content="Discover Softylus Technologies' innovative mobile app development services. We create engaging, efficient, and essential apps for businesses of all sizes." />
        <meta name="keywords" content="mobile app development, app development, android app development, iOS app development, mobile app design, mobile app strategy, softylus, app developers, software development, custom software" />
      </Helmet>

      <Seo
        // Use Seo component for other meta tags
        title="Mobile App Development | Softylus Technologies"
        description="Discover Softylus Technologies' innovative mobile app development services. We create engaging, efficient, and essential apps for businesses of all sizes."
      />

      <DetailHeader
        Title={<FormattedMessage id="detailMobile.header.title" />}
        TitleOverSpan={<FormattedMessage id="detailMobile.header.titleOverSpan" />}
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title={<FormattedMessage id="detailMobile.hero.title" />}
          SubHeading={<FormattedMessage id="detailMobile.hero.subHeading" />}
          imageSrc="/Images DetailMobile.svg"
        />

        {details.map((detail, index) => {
          const className = index % 2 === 0 ? "section-image-right" : "section-image-left";

          if (index === 3) {
            return (
              <ServicesExplain
                key={index}
                imageSrc="/CASE STUDY IMG.svg"
                logo="/Vend.svg"
                Title={<FormattedMessage id="detailMobile.caseStudy.title" />}
                SubHeading={<FormattedMessage id="detailMobile.caseStudy.subHeading" />}
                buttonText={<FormattedMessage id="detailMobile.caseStudy.buttonText" />}
                className="btn-ServicesExplain-hide"
              />
            );
          } else if (index === 4) {
            return (
              <DetailHero
                key={index}
                Title={<FormattedMessage id="detailMobile.buildIdentity.title" />}
                SubHeading={<FormattedMessage id="detailMobile.buildIdentity.subHeading" />}
                imageSrc="/Image right DetailMobile.svg"
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
        titleId="detailMobile.footerCon.title"
        titleOverSpanId="detailMobile.footerCon.titleOverSpan"
        subHeadingId="detailMobile.footerCon.subHeading"
        buttonTitleId="detailMobile.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailMobile;
