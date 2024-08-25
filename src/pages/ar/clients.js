import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import Layout from "../../components/layout";
import FooterCon from "../../components/FooterCon";
import Seo from '../../components/seo';
import "../../style/Clients.css";
import { Helmet } from "react-helmet"; // Import Helmet
import { LanguageContext } from '../../context/LanguageContext'; 

const Clients = () => {
  const [clientLogos, setClientLogos] = useState([]);
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    const fetchClientLogos = async () => {
      try {
        const response = await axios.get('https://strapi.softylus.com/api/clients?populate=Client_logo', {
          headers: {
            Authorization: 'Bearer e9279a95db02d9220f944a52d6c0288bb38c733eca16bef5ed2e634e7c53b043560a00b4793f333cec78a9f2f63b72b40288a527d1ed8fbe47a7d1a08f66a60d64762c85f43b5eeeeb50f38244490e6fe7f3e338b4263eaf18056e0f2eded7cf6b09542910930be55000e4205e764bea8933db3694e33722520774fb00e422cd'
          }
        });
        setClientLogos(response.data.data);
      } catch (error) {
        console.error('Error fetching client logos:', error);
      }
    };

    fetchClientLogos();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>عملاؤنا | قصص نجاح Softylus</title>
        <meta name="description" content="نفخر بخدمة مجموعة متنوعة من العملاء. اقرأ قصص النجاح والشهادات من الشركات التي حققت نمواً ملحوظاً مع حلول البرمجيات من Softylus" />
        <meta name="keywords" content="تطوير البرمجيات, حلول البرمجيات, تطوير المواقع, تطبيقات الجوال, تصميم UX, Softylus, خدمات تكنولوجيا المعلومات, عملائنا, قصص النجاح" />
      </Helmet>

      <Seo 
        title="عملاؤنا | قصص نجاح Softylus"
        description="نفخر بخدمة مجموعة متنوعة من العملاء. اقرأ قصص النجاح والشهادات من الشركات التي حققت نمواً ملحوظاً مع حلول البرمجيات من Softylus"
      />

      <div className='Clients-sec'>
        <div className='Clients-container'>
          <div className='center-clints-title'>
            <div className='Clients-title'>
              <h1>
                <FormattedMessage 
                  id="clients.title"
                  defaultMessage="Clients trust <span>Softylus</span> as their partner for progress"
                  values={{
                    span: (chunks) => <span>{chunks}</span>
                  }}
                />
              </h1>
              <p>
                <FormattedMessage 
                  id="clients.description"
                  defaultMessage="At Softylus, our clients are at the heart of everything we do. We understand that without your trust and support, our success wouldn't be possible. That's why we've dedicated this page to you, our valued clients."
                />
              </p>
            </div>
          </div>
          <div className='clients-logo-sec'>
            {clientLogos.map((client, index) => (
              <div key={client.id} className='client-image-border'>
                <img 
                  src={`https://strapi.softylus.com${client.attributes.Client_logo.data.attributes.url}`} 
                  alt={`Logo of ${client.attributes.Client_name}`} // Added alt text for accessibility
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterCon
        titleId="clients.footer.title"
        titleOverSpanId="clients.footer.titleOverSpan"
        subHeadingId="clients.footer.subHeading"
      />
    </Layout>
  );
};

export default Clients;
