import React from "react";
import { useState, useEffect } from "react";
import { useIntl, FormattedMessage } from 'react-intl';
import FAQDataEn from "../sources/FAQ-en.json";
import FAQDataAr from "../sources/FAQ-ar.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style/FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    // Load the FAQ data based on the current locale
    const FAQData = intl.locale === 'ar' ? FAQDataAr : FAQDataEn;
    setFaqs(FAQData);
  }, [intl.locale]);

  return (
    <section className="md:container mx-auto w-full">
      <div className="flex flex-col items-center justify-center w-100%">
        <h1 className="text-4xl my-20 font-bold">
          <FormattedMessage id="faq.title" defaultMessage="FAQs" />
        </h1>
        <div className="">
          {faqs.map((faq) => (
            <Accordion key={faq.id} sx={{ background: "transparent" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
              >
                <Typography variant="h6">
                  <FormattedMessage id={`faq.${faq.id}.question`} defaultMessage={faq.question} />
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#1D1313",
                }}
              >
                <Typography className="p-faq">
                  <FormattedMessage id={`faq.${faq.id}.answer`} defaultMessage={faq.answer} />
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
