import React, { useState, useEffect, useContext } from "react";
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
import Seo from "../../components/seo";
import { Helmet } from "react-helmet"; // Import Helmet
import { LanguageContext } from '../../context/LanguageContext'; 

const DetailMobile = () => {
  const [details, setDetails] = useState([]);
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    setDetails(locale === "en" ? detailDataEn : detailDataAr);
  }, [locale]);

  return (
    <Layout>
      <Helmet>
        <title>تطوير تطبيقات الجوال | تكنولوجيا Softylus</title>
        <meta name="description" content="اكتشف خدمات تطوير تطبيقات الجوال المبتكرة من Softylus Technologies. نحن ننشئ تطبيقات جذابة وفعالة وأساسية للشركات من جميع الأحجام" />
        <meta name="keywords" content="تطوير تطبيقات الجوال, تطبيقات الجوال, تطوير تطبيقات Android, تطوير تطبيقات iOS, تصميم تطبيقات الجوال, استراتيجية تطبيقات الجوال, Softylus, مطوري التطبيقات, تطوير البرمجيات, برمجيات مخصصة" />
      </Helmet>

      <Seo
        // Use Seo component for other meta tags
        title="تطوير تطبيقات الجوال | تكنولوجيا Softylus"
        description="اكتشف خدمات تطوير تطبيقات الجوال المبتكرة من Softylus Technologies. نحن ننشئ تطبيقات جذابة وفعالة وأساسية للشركات من جميع الأحجام"
      />

      <DetailHeader
        Title="ريادة تطوير تطبيقات الجوال في"
        TitleOverSpan=""
      />
      <div className="md:px-[70px] mx-auto">
        <DetailHero
          Title="من نحن: رواد في ابتكار تطبيقات الجوال"
          SubHeading="تقف Softylus Technologies في طليعة ابتكار تطبيقات الجوال. إن تفانينا في إنشاء حلول جوال مخصصة يضع الشركات في موقع ريادي في مجال الجوال. من واجهات المستخدم البديهية إلى وظائف الجوال القوية، نقدم تطبيقات جذابة وفعالة وأساسية لنجاح عملائنا"
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
        titleOverSpanId=" "
        subHeadingId="detailMobile.footerCon.subHeading"
        buttonTitleId="detailMobile.footerCon.buttonTitle"
      />
    </Layout>
  );
};

export default DetailMobile;
