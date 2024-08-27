import React, { useContext } from 'react'
import AISoftwarecard from './AI-Software-card'
import AISoftwareDataen from "../sources/AI-Software-en.json"
import AISoftwareDataar from "../sources/AI-Software-ar.json"
import { LanguageContext } from '../context/LanguageContext';
import { FormattedMessage } from 'react-intl';

import "./style/AISoftware.css"
const AISoftware = () => {
    const { locale } = useContext(LanguageContext);
    const AISoftwareData = locale === 'en' ? AISoftwareDataen : AISoftwareDataar;
  return (
    <section className='AISoftware-sec w-full md:px-[70px] '>
        <div className='AISoftware-container'>
            <div className='AISoftware-title'>
            <h1><FormattedMessage id="aiSoftware.title" defaultMessage="AI Software Development Services" /></h1>
            </div>
            <div className='AISoftware-cards-container'>
                {AISoftwareData.map((item) => (
                    <AISoftwarecard
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default AISoftware
