import React, { useRef,useContext } from "react";
import "./style/Header.css";
import { Link } from "gatsby";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FormattedMessage, useIntl } from "react-intl";
import { LanguageContext } from '../context/LanguageContext';

const Header = ({
  Title,
  SubHeading,
  buttonText,
  overSpan,
  
  altText,
  className,
  titleId,
  subHeadingId,
  buttonTextId,
  overSpanId,
}) => {
  const container = useRef(null);
  const intl = useIntl();

  useGSAP(
    () => {
      const elements = container.current.children;
      container.current.classList.remove("opacity-0");
      gsap.set(container.current, {
        autoAlpha: 1,
      });

      if (elements.length > 1) {
        let animation = gsap.timeline({ repeat: 20 });
        let duration = 0.6;
        let pause = 2;
        let stagger = duration + pause;
        let repeatDelay = stagger * (elements.length - 1) + pause;

        animation
          .from(elements, {
            y: 80,
            duration: 0.6,
            opacity: 0,
            stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay,
            },
          })
          .to(
            elements,
            {
              y: 80,
              duration: 0.6,
              opacity: 0,
              stagger: {
                each: stagger,
                repeat: -1,
                repeatDelay: repeatDelay,
              },
            },
            stagger
          );
      }
    },
    { scope: container }
  );
  const renderText = (text, id) => {
    if (id) {
      return <FormattedMessage id={id} defaultMessage={text} />;
    }
    return text;
  };  
  
  
  const overSpanContent = overSpanId 
    ? intl.formatMessage({ id: overSpanId, defaultMessage: overSpan })
    : overSpan;
    const imageSrc = intl.locale === 'ar' ? '/hero ar.png' : '/softylusHero.png';

  const isEmpty = !overSpanContent || (Array.isArray(overSpanContent) && overSpanContent.length === 0);
  const { locale } = useContext(LanguageContext);

  return (
    <header className="main-header bg-hero-pattern bg-cover bg-right-center bg-no-repeat min-h-screen flex bg-ps-buttom">
      <div className="grid max-w-screen-xl py-8 min-w-full lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
        <div className="heading-container mr-auto place-self-center md:pl-[70px] pl-4 pr-4">
          <h1 className="primary-heading overflow-hidden max-w-2xl mb-2 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            {renderText(Title, titleId)}
            <div
              ref={container}
              className={`inline-flex m-0 p-0 relative w-full opacity-0 ${isEmpty ? 'hidden' : ''}`}
            >
             {!isEmpty && Array.isArray(overSpanContent) ? (
                overSpanContent.map((span, index) => (
                  <span key={index} className="mx-1 text-main absolute over-span top-[-0.8em]">
                    {span}
                  </span>
                ))
              ) : (
                <span className="mx-1 text-main absolute over-span top-[-0.8em]">
                  {overSpanContent}
                </span>
              )}
            </div>
          </h1>
          <p className="sub-heading max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-lg leading-loose dark:text-gray-400">
            {renderText(SubHeading, subHeadingId)}
          </p>
          <Link
            to={`/${locale}/contact-us`}
            className="primary-cta no-underline inline-flex items-center justify-center text-base font-extrabold text-white bg-main hover:opacity-85 border-0 rounded-full focus:ring-10"
          >
            {renderText(buttonText, buttonTextId)} <img src="/Arrow 1 (1).svg" className="mx-2" alt={intl.formatMessage({ id: "header.arrowAlt", defaultMessage: "Arrow" })} />
          </Link>
        </div>
        <div className="hero-img-container lg:mt-0 lg:flex w-100 h-100 bg-transparent">
        <img 
  src={imageSrc} 
  alt={altText || intl.formatMessage({ id: "header.imageAlt", defaultMessage: "Describe the image here" })} 
  className="w-full object-contain" 
/>
        </div>
      </div>
    </header>
  );
};

export default Header;