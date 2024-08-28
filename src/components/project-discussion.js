import React from 'react';
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import "../style/projects.css";

const ProjectDiscussion = () => {
  const intl = useIntl();

  return (
    <section className='projectDiscussion-sec md:px-[70px] mx-auto py-10 pl-4 pr-4'>
      <div className='blur-circle'></div>
      <div className='projectDiscussion-container'>
        <div className='projectDiscussion-content'>
          <img 
            className='projectDiscussion-content-circle' 
            src='/Mask group.png' 
            alt={intl.formatMessage({ id: "projectDiscussion.circleImageAlt" })}
          />
          <h1><FormattedMessage id="projectDiscussion.title" /></h1>
          <div className='projectDiscussion-img project-detail-image-mobile'>
            <img 
              src='/aseel-call.svg' 
              alt={intl.formatMessage({ id: "projectDiscussion.callImageAlt" })}
            />
            <img 
              src='/base.svg' 
              className='projectDiscussion-img-base' 
              alt={intl.formatMessage({ id: "projectDiscussion.baseImageAlt" })}
            />
          </div>
          <p><FormattedMessage id="projectDiscussion.description" /></p>
          <Link rel="canonical" 
            to="https://calendly.com/aseel-softylus/30min"
            className="no-underline mb-4 inline-flex items-center justify-center px-4 py-[12px] text-base font-semibold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10 w-auto"
          >
            <FormattedMessage id="projectDiscussion.bookCall" />
            <img 
              src="/Arrow 1 (1).svg" 
              className="mx-2" 
              alt={intl.formatMessage({ id: "projectDiscussion.arrowAlt" })}
            />
          </Link>
          <div className='projectDiscussion-span'>
            <span>
              <img 
                src='/Vector (3).png' 
                alt={intl.formatMessage({ id: "projectDiscussion.checkmarkAlt" })}
              />
              <FormattedMessage id="projectDiscussion.noPressure" />
            </span>
            <span>
              <img 
                src='/Vector (3).png' 
                alt={intl.formatMessage({ id: "projectDiscussion.checkmarkAlt" })}
              />
              <FormattedMessage id="projectDiscussion.getPricing" />
            </span>
            <span>
              <img 
                src='/Vector (3).png' 
                alt={intl.formatMessage({ id: "projectDiscussion.checkmarkAlt" })}
              />
              <FormattedMessage id="projectDiscussion.seeExamples" />
            </span>
          </div>
        </div>
        <div className='projectDiscussion-img'>
          <img 
            src='/aseel-call.svg' 
            alt={intl.formatMessage({ id: "projectDiscussion.callImageAlt" })}
          />
          <img 
            src='/base.svg' 
            className='projectDiscussion-img-base' 
            alt={intl.formatMessage({ id: "projectDiscussion.baseImageAlt" })}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectDiscussion;