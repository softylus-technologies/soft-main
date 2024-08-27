import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl';
import AIExpertiseDataen from "../sources/AIExpertise-en.json"
import AIExpertiseDataar from "../sources/AIExpertise-ar.json"
import { LanguageContext } from '../context/LanguageContext';

import "./style/AI-Expertise.css"

const AIExpertise = () => {
  const { locale } = useContext(LanguageContext);
  const AIExpertiseData = locale === 'en' ? AIExpertiseDataen : AIExpertiseDataar;

  return (
    <section className='AIExpertise-sec'>
        <div className='AIExpertise-container'>
            <div className='AIExpertise-head'>
                <h1>
                     <FormattedMessage id="aiExpertise.header.title"  />
                </h1>
                <p>
                    <FormattedMessage id="aiExpertise.header.description" />
                </p>
            </div>
            <div className='AIExpertise-cards-container'>
                {AIExpertiseData.map((item, index) => (
                    <div key={index} className="expertise-section">
                        <div className="expertise-title">
                            <h6><FormattedMessage id={`aiExpertise.expertise.${index}.title`} defaultMessage={item.title} /></h6>
                        </div>
                        <div className="expertise-container">
                            {item.data.map((iconItem, iconIndex) => (
                            <div key={iconIndex} className="icon-item">
                                <img src={iconItem.icon} alt={iconItem.title} />
                                <p><FormattedMessage id={`aiExpertise.expertise.${index}.data.${iconIndex}.title`} defaultMessage={iconItem.title} /></p> 
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AIExpertise
