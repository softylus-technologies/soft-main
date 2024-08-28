import React,{useContext} from "react";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style//IndustryTabs.css";
import "react-tabs/style/react-tabs.css";
import TowSideLayout from "./tow-side-layout/TowSideLayout";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { graphql, useStaticQuery } from "gatsby";
import { FormattedMessage, useIntl } from "react-intl";
import { LanguageContext } from '../context/LanguageContext';

const SecTwo = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  const industries = [
    {
      titleId: "industries.blockchain.title",
      descriptionId: "industries.blockchain.description",
      keywordsIds: [
        "industries.blockchain.keyword1",
        "industries.blockchain.keyword2",
        "industries.blockchain.keyword3",
        "industries.blockchain.keyword4",
        "industries.blockchain.keyword5",
      ],
    },
    {
      titleId: "industries.crowdfunding.title",
      descriptionId: "industries.crowdfunding.description",
      keywordsIds: [
        "industries.crowdfunding.keyword1",
        "industries.crowdfunding.keyword2",
        "industries.crowdfunding.keyword3",
        "industries.crowdfunding.keyword4",
        "industries.crowdfunding.keyword5",
      ],
    },
    {
      titleId: "industries.fintech.title",
      descriptionId: "industries.fintech.description",
      keywordsIds: [
        "industries.fintech.keyword1",
        "industries.fintech.keyword2",
        "industries.fintech.keyword3",
        "industries.fintech.keyword4",
        "industries.fintech.keyword5",
      ],
    },
    {
      titleId: "industries.ecommerce.title",
      descriptionId: "industries.ecommerce.description",
      keywordsIds: [
        "industries.ecommerce.keyword1",
        "industries.ecommerce.keyword2",
        "industries.ecommerce.keyword3",
        "industries.ecommerce.keyword4",
        "industries.ecommerce.keyword5",
      ],
    },
  ];
  const { locale } = useContext(LanguageContext);

  return (
    <TowSideLayout reverse={true} imgUrl={"/Frame 1000003299.svg"} classNameres={"desktop"}>
      <h2 className="text-3xl md:text-5xl mb-3">
        <FormattedMessage id="industries.heading" defaultMessage="We work across many industries – find yours!" />
      </h2>
      <div className="gif-container flex mx-auto items-start justify-start w-100 h-100 relative mobile">
        <img className="w-full h-full object-cover border-radius30" src="/Frame 1000003299.svg" alt={intl.formatMessage({ id: "industries.imageAlt", defaultMessage: "Industries illustration" })} />
      </div>
      <div>
        <Tabs>
          <TabList>
            {industries.map((industry, index) => (
              <Tab key={index}>
                <FormattedMessage id={industry.titleId} />
              </Tab>
            ))}
          </TabList>

          {industries.map((industry, index) => (
            <TabPanel key={index} className="w-100">
              <p className="p-tab">
                <FormattedMessage id={industry.descriptionId} />
              </p>
            </TabPanel>
          ))}
        </Tabs>
      </div>
      <Link rel="canonical" 
        to={`/${locale}/contact-us`}
        className="primary-cta no-underline inline-flex items-center justify-center text-base font-bold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10"
      >
        <FormattedMessage id="industries.seeMoreButton" defaultMessage="See more industries" />
      </Link>
    </TowSideLayout>
  );
};

export default SecTwo;