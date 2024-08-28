import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { LanguageContext } from '../context/LanguageContext';


import "./style/Softylus-AI-Launchpad.css";

const SoftylusAILaunchpad = () => {
  const { locale } = useContext(LanguageContext);

  return (
    <section className='SoftylusAILaunchpad-sec'>
      <div className='SoftylusAILaunchpad-container'>
        <h1>
          <FormattedMessage id="softylusAILaunchpad.title" defaultMessage="Get Started with Softylus AI Software Development." />
        </h1>
        <p>
          <FormattedMessage id="softylusAILaunchpad.description" defaultMessage="Softylus is widely recognized for its excellence in developing AI software solutions. Let’s talk to develop custom AI-powered solutions." />
        </p>
        <Link rel="canonical"  to="" className='no-underline inline-flex items-center justify-center text-base font-bold text-main bg-white hover:opacity-85 border-0 rounded-full focus:ring-10'>
          <FormattedMessage id="softylusAILaunchpad.button" defaultMessage="Book A Free Consultation" />
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default SoftylusAILaunchpad;
