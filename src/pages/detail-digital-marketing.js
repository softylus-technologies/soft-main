import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import DetailHeader from "../components/DetailHeader";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailDigitalMarketing.css";
import detailDataEn from "../sources/DetailDigitalMarketing-en.json";
import detailDataAr from "../sources/DetailDigitalMarketing-ar.json";
import ServicesExplain from "../components/ServicesExplain";
import Seo from "../components/seo";

const DetailDigitalMarketing = () => {
  const [details, setDetails] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    const detailData = intl.locale === 'ar' ? detailDataAr : detailDataEn;
    setDetails(detailData);
  }, [intl.locale]);

  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "detailDigitalMarketing.seoTitle" })}
        description={intl.formatMessage({ id: "detailDigitalMarketing.seoDescription" })}
      />
      <DetailHeader
        Title={<FormattedMessage id="detailDigitalMarketing.header.title" />}
        TitleOverSpan={<FormattedMessage id="detailDigitalMarketing.header.titleOverSpan" />}
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title={<FormattedMessage id="detailDigitalMarketing.hero.title" />}
          SubHeading={<FormattedMessage id="detailDigitalMarketing.hero.subHeading" />}
          imageSrc="/Images Detail digital marketing.svg"
        />

        {details.map((detail, index) => {
          const className = index % 2 === 0 ? "section-image-right" : "section-image-left";

          if (index === 3) {
            return (
              <ServicesExplain
                key={index}
                imageSrc="/CASE STUDY IMG.svg"
                logo="/Vend.svg"
                Title={<FormattedMessage id="detailDigitalMarketing.caseStudy.title" />}
                SubHeading={<FormattedMessage id="detailDigitalMarketing.caseStudy.subHeading" />}
                buttonText={<FormattedMessage id="detailDigitalMarketing.caseStudy.buttonText" />}
                className="btn-ServicesExplain-hide"
              />
            );
          } else if (index === 4) {
            return (
              <DetailHero
                key={index}
                Title={<FormattedMessage id="detailDigitalMarketing.customSolutions.title" />}
                SubHeading={<FormattedMessage id="detailDigitalMarketing.customSolutions.subHeading" />}
                imageSrc="/Image right Detail digital marketing.svg"
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
        titleId="detailDigitalMarketing.footerCon.title"
        titleOverSpanId="detailDigitalMarketing.footerCon.titleOverSpan"
        subHeadingId="detailDigitalMarketing.footerCon.subHeading"
        buttonTitleId="detailDigitalMarketing.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailDigitalMarketing;