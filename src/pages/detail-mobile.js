import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import DetailHeader from "../components/DetailHeader";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailMobile.css";
import detailDataEn from "../sources/DetailMobile-en.json";
import detailDataAr from "../sources/DetailMobile-ar.json";
import ServicesExplain from "../components/ServicesExplain";
import Seo from "../components/seo";

const DetailMobile = () => {
  const [details, setDetails] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    const detailData = intl.locale === 'ar' ? detailDataAr : detailDataEn;
    setDetails(detailData);
  }, [intl.locale]);

  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "detailMobile.seoTitle" })}
        description={intl.formatMessage({ id: "detailMobile.seoDescription" })}
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
