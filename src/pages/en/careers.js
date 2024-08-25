import React, { useState } from "react";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Button from "@mui/material/Button";
import PopupBody from "../../components/PopupBody";
import FooterCon from "../../components/FooterCon";
import Layout from "../../components/layout";
import Header from "../../components/Header";
import SayCustomer from "../../components/SayCustomer";
import AccordianCarrer from "../../components/AccordianCarrer";
import { Data } from "../../sources/accordian.json";
import "../../style/Careers.css";
import { Unstable_Popup as BasePopup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import CareersAccordion from "../../components/careers-accordion/CareersAccordion";
import InlinePopup from "../../components/inline-popup/InlinePopup";
import { IoMdSearch } from "react-icons/io";
import Seo from "../../components/seo";

const Careers = () => {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popper" : undefined;

  return (
      <Layout>
        <Seo
          title="Career Opportunities | Softylus Technologies"
          description="Explore exciting career opportunities at Softylus Technologies. Join our team and work on interesting projects in technology and innovation."
        />
        <Header
          Title={<FormattedMessage id="careers.header.title" />}
          className="unhide-span"
          overSpan={<FormattedMessage id="careers.header.overSpan" />}
          SubHeading={<FormattedMessage id="careers.header.subHeading" />}
          buttonText={<FormattedMessage id="careers.header.buttonText" />}
        />

        <div className="flex flex-col gap-2 pt-[80px] md:container justify-center mx-auto md:px-[70px]">
          <div className="flex justify-center items-center flex-col gap-2 text-left-mobile-container">
            <h2 className="Careers-title">
              <FormattedMessage id="careers.opportunities.title" />
            </h2>
            <p className="!text-gray-400 px-2 text-center text-left-mobile">
              <FormattedMessage id="careers.opportunities.description" />
            </p>
          </div>
          <div className="flex flex-col">
            {/* Search form commented out in the original code */}
          </div>
        </div>

        <CareersAccordion />

        <SayCustomer />
        <FooterCon
          titleId="careers.footerCon.title"
          titleOverSpanId="careers.footerCon.titleOverSpan"
          subHeadingId="careers.footerCon.subHeading"
          buttonTitleId="careers.footerCon.buttonTitle"
        />
      </Layout>
  );
};

export default Careers;