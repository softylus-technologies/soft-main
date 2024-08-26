import React,{useContext} from "react";
import "../../style/Services.css";
import { StaticImage } from "gatsby-plugin-image";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SayCustomer from "../../components/SayCustomer";
import FAQ from "../../components/FAQ";
import servicesEn  from "../../sources/services-en.json";
import servicesAr  from "../../sources/services-ar.json";
import { Link } from "gatsby";
import TowSideLayout from "../../components/tow-side-layout/TowSideLayout";
import Seo from "../../components/seo";
import "../../style/index.css"
import { LanguageContext } from '../../context/LanguageContext';
import { Helmet } from "react-helmet"; // Import Helmet

const Services = () => {
  const { locale } = useContext(LanguageContext);

  const servicesData = locale === "en" ? servicesEn : servicesAr; 

  return ( 
    <Layout>
      <Helmet>
       
        <meta name="keywords" content="تطوير البرمجيات, تطوير الويب, تطوير تطبيقات الجوال, تصميم UI/UX, حلول البرمجيات, حلول تكنولوجيا المعلومات, استشارات تكنولوجيا المعلومات, Softylus, خدمات" />
      </Helmet>

      <Seo 
        title="حلول برمجية شاملة | خدمات Softylus"
        description="استكشف مجموعتنا الكاملة من الخدمات بما في ذلك تطوير الويب والهواتف المحمولة وتصميم UI/UX والمزيد. تكرس شركة Softylus جهودها لتقديم حلول مخصصة تلبي احتياجات عملك المحددة."
      />
     
        <Header
          Title="خدمات تطوير شاملة لأعمالك"
          SubHeading="هل تبحث عن شريك موثوق به لإرشادك خلال كل خطوة من عملية تطوير البرمجيات؟ في Softylus ، نحل تحديات الأعمال ببرمجيات مخصصة. ركز على الجوانب الحاسمة الأخرى لعملك بينما نتولى نحن التكنولوجيا"
          buttonText="استكشف حلولنا"
        />
        <div className="md:px-[70px] mx-auto">
          <TowSideLayout reverse={true} imgUrl="/Image services1.svg" classNameres={"desktop"}>
            <h1 className="text-5xl mb-3 title-res">
            تبسيط رحلة تطوير البرمجيات الخاصة بك
            </h1>
            <div class="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
              <img class="w-full h-full object-cover border-radius30" src="/Image services1.svg"/>
            </div>
            <p>
            تعاون معنا وتخلص من الحاجة إلى التعامل مع العديد من مقدمي الخدمات. احصل على حلول شاملة في مكان واحد مع فريق يعطي الأولوية لنجاحك ويقدم دعمًا للعملاء على مدار الساعة طوال أيام الأسبوع.
            </p>

            <div className="my-4">
              <Link
                to={`/${locale}/contact-us`}
                className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
              >
               جدول استشارة مجانية  
              </Link>
            </div>
          </TowSideLayout>

          <div className="secvices-Banner relative p-10">
            <img
              className="circle !top-[-10%] !bottom-[unset] !right-100 "
              id="circle1"
              src="/Frame 1000003358.svg"
            />
            <h1>مجموعة التقنيات لدينا</h1>
            <div className="md:bg-service-desktop bg-service-mobile min-h-[50vh] bg-center bg-no-repeat	bg-contain"></div>
          </div>

          <section className="spacing">
          {servicesData.map((service, index) => {
  const isOdd = index % 2 !== 0;

  return (
    <TowSideLayout 
      key={service.id} 
      reverse={isOdd} 
      imgUrl={service.imageSrc} 
      classNameres={"desktop"}
    >
      <h1 className="title-res text-4xl mb-3">
        {service.title}
      </h1>
      <div className="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
        <img 
          className="w-full h-full object-cover border-radius30" 
          src={service.imageSrc} 
          alt={service.title} 
        />
      </div>
      <p>
        {service.subHeading}
      </p>
      <div className="mt-4">
        <Link
          to={`/${locale}/${service.path}`}
          className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
        >
          {service.buttonText}
        </Link>
      </div>
    </TowSideLayout>
  );
})}
          </section>

          <FAQ />
          <SayCustomer />
        </div>
        <FooterCon
          titleId="services.footerCon.title"
          titleOverSpanId="services.footerCon.titleOverSpan"
          subHeadingId="services.footerCon.subHeading"
          buttonTitleId="services.footerCon.buttonTitle"
          hideSoftylus="none"
        />
      </Layout>
  );
};

export default Services;
