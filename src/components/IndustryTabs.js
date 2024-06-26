import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style//IndustryTabs.css";
import "react-tabs/style/react-tabs.css";
import TowSideLayout from "./tow-side-layout/TowSideLayout";
import { Link } from "gatsby";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { graphql, useStaticQuery } from 'gatsby';

const SecTwo = () => {
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
      title: "Blockchain",
      description: "Revolutionize your business with our blockchain expertise. We develop secure, transparent, and decentralized solutions for supply chain management, financial services, and data integrity.",
      keywords: ["Decentralized applications (DApps)", "Smart contracts", "Cryptocurrency integration", "Blockchain security", "Enterprise blockchain solutions"],
    },
    {
      title: "Crowdfunding",
      description: "Empower your fundraising efforts with our state-of-the-art crowdfunding platforms. We create user-friendly, secure, and scalable solutions that connect innovators with backers.",
      keywords: ["Peer-to-peer lending", "Equity crowdfunding", "Reward-based platforms", "Donor management", "Campaign analytics"],
    },
    {
      title: "Fin-Tech",
      description: "Transform the financial landscape with our innovative FinTech solutions. We develop advanced platforms for digital banking, payment processing, and financial management.",
      keywords: ["Mobile banking", "Payment gateways", "Robo-advisors", "Blockchain in finance", "RegTech solutions"],
    },
    {
      title: "E-commerce",
      description: "Boost your online retail presence with our powerful e-commerce solutions. We create scalable, feature-rich platforms that offer seamless shopping experiences across devices.",
      keywords: ["Mobile commerce", "Omnichannel retail", "Personalized shopping experiences", "Inventory management", "Secure payment integration"],
    },
  ];

  return (
    <TowSideLayout reverse={true} imgUrl={"/Frame 1000003299.svg"}>
      <h1 className="text-3xl md:text-5xl mb-3">
        We work across many industries – find yours!
      </h1>
      <div>
        <Tabs>
          <TabList>
            {industries.map((industry, index) => (
              <Tab key={index}>{industry.title}</Tab>
            ))}
          </TabList>

          {industries.map((industry, index) => (
            <TabPanel key={index} className="w-100">
              <p className="p-tab">
                {industry.description}
              </p>
            </TabPanel>
          ))}
          
        </Tabs>
      </div>
      <div className="my-4">
        <Link
          to="/contact-us"
          className="no-underline inline-flex items-center justify-center px-3 py-3 text-base font-medium text-white bg-main hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
        >
          Check All Industry
        </Link>
      </div>
    </TowSideLayout>
  );
};

export default SecTwo;
