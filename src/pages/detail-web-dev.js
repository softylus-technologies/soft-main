import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import DetailHeader from "../components/DetailHeader";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailWebDev.css";
import detailDataEn from "../sources/DetailWebDev-en.json";
import detailDataAr from "../sources/DetailWebDev-ar.json";
import ServicesExplain from "../components/ServicesExplain";
import Seo from "../components/seo";

const DetailWebDev = () => {
  const [details, setDetails] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    const detailData = intl.locale === 'ar' ? detailDataAr : detailDataEn;
    setDetails(detailData);
  }, [intl.locale]);

  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "detailWebDev.seoTitle" })}
        description={intl.formatMessage({ id: "detailWebDev.seoDescription" })}
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
