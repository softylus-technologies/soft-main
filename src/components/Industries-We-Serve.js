import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { LanguageContext } from '../context/LanguageContext';
import IndustriesWeServeDataen from "../sources/Industries-We-Serve-en.json";
import IndustriesWeServeDataar from "../sources/Industries-We-Serve-ar.json";
import "./style/Industries-We-Serve.css";

const IndustriesWeServe = () => {
    const { locale } = useContext(LanguageContext);
    const IndustriesWeServeData = locale === 'en' ? IndustriesWeServeDataen : IndustriesWeServeDataar;
  return (
    <section className='IndustriesWeServe-sec'>
        <div className='IndustriesWeServe-container'>
            <div className='IndustriesWeServe-head'>
            <h1>
                <FormattedMessage id="industriesWeServe.title" defaultMessage="Industries We Serve" />
            </h1>
            </div>
            <div className='IndustriesWeServe-cards-container'>
            {IndustriesWeServeData.map((item) =>(
                <div className='IndustriesWeServe-card'>
                    <img src={item.icon} alt='icon'/>
                    <h3>{item.title}</h3>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}

export default IndustriesWeServe
