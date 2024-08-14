import React, { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import DetailHeader from "../components/DetailHeader";
import DetailHero from "../components/DetailHero";
import FooterCon from "../components/FooterCon";
import DetailSec from "../components/DetailSec";
import "../style/DetailSeo.css";
import detailDataEn from "../sources/DetailSMM-en.json";
import detailDataAr from "../sources/DetailSMM-ar.json";
import ServicesExplain from "../components/ServicesExplain";
import Seo from "../components/seo";

const DetailSMM = () => {
  const [details, setDetails] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    const detailData = intl.locale === 'ar' ? detailDataAr : detailDataEn;
    setDetails(detailData);
  }, [intl.locale]);

  return (
    <Layout>
      <Seo
        title={intl.formatMessage({ id: "detailSMM.seoTitle" })}
        description={intl.formatMessage({ id: "detailSMM.seoDescription" })}
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
                imageSrc="/CASE STUDY IMG.svg"
                logo="/Vend.svg"
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