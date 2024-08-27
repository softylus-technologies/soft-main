import React, { useEffect, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../context/LanguageContext';
import AIDevProcessDataen from "../sources/AIDevProcess-en.json";
import AIDevProcessDataar from "../sources/AIDevProcess-ar.json";


import "./style/AIDevProcess.css";

const AIDevProcess = () => {
  const { locale } = useContext(LanguageContext);
  const AIDevProcessData = locale === 'en' ? AIDevProcessDataen : AIDevProcessDataar;

  useEffect(() => {
    function isElementInViewport(el) {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      requestAnimationFrame(() => {
        const container = document.querySelector('.AIDevProcess-cards-container');
        if (container && isElementInViewport(container)) {
          const cards = container.querySelectorAll('.AIDevProcess-card');
          cards.forEach(card => {
            card.style.animationPlayState = 'running'; // Start animation
          });
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }
  
    // Only add event listeners if the window width is greater than a typical mobile width
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on load
  
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  return (
    <section className='AIDevProcess-sec'>
      <div className='AIDevProcess-container'>
        <div className='AIDevProcess-head'>
          <h1>
            <FormattedMessage id="aiDevProcess.title" defaultMessage="Our AI Software Development Process" />
          </h1>
          <p>
            <FormattedMessage id="aiDevProcess.description" defaultMessage="We have a curated process to help you build your AI system from scratch with maximum efficiency." />
          </p>
        </div>
                <div className='AIDevProcess-cards-container'>
                    {AIDevProcessData.map((item, index) => (
                        <div className='AIDevProcess-card' key={index}>
                            <div className='AIDevProcess-head-card'>
                                <img src={item.number} alt={`Step ${index + 1}`}/>
                                <svg width="168" height="17" viewBox="0 0 168 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_96_9891)">
                                <g clip-path="url(#clip1_96_9891)">
                                <path d="M0 8.22437H166" stroke="#EC2227" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="6 4"/>
                                <path d="M160.5 15.2243L167.5 8.22437L160.5 1.22437" stroke="#EC2227" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </g>
                                <defs>
                                <clipPath id="clip0_96_9891">
                                <rect width="168" height="16" fill="white" transform="translate(0 0.0500488)"/>
                                </clipPath>
                                <clipPath id="clip1_96_9891">
                                <rect width="169" height="17" fill="white" transform="translate(0 0.0500488)"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AIDevProcess