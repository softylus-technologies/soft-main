import React, { useContext } from 'react';
import "./style/Why-Develop-ai.css"
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../context/LanguageContext';
import WhyDevelopaiDataen from "../sources/Why-Develop-ai-en.json";
import WhyDevelopaiDataar from "../sources/Why-Develop-ai-ar.json";

const WhyDevelopai = () => {
    const { locale } = useContext(LanguageContext);
    const WhyDevelopaiData = locale === 'en' ? WhyDevelopaiDataen : WhyDevelopaiDataar;
  return (
    <section className='WhyDevelopai-sec'>
        <div className='WhyDevelopai-container'>
            <div className='WhyDevelopai-head'>
            <h1>
                <FormattedMessage id="whyDevelopai.title" defaultMessage="Why Develop an AI Software for Your Business?" />
            </h1>
            </div>
            <div className='WhyDevelopai-cards-container'>
                {WhyDevelopaiData.map((item) => (
                    <div className='WhyDevelopai-card'>
                    <img src={item.icon} alt='icon'/>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                </div>
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default WhyDevelopai
