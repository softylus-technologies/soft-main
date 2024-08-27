import React, { useState,useContext  } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FormattedMessage, useIntl } from "react-intl";
import "./style/NavBar.css";
import { LanguageContext } from '../context/LanguageContext';

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [isMegaDropdownOpen, setIsMegaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const intl = useIntl();
  const { toggleLocale } = useContext(LanguageContext);
  const { locale } = useContext(LanguageContext);
  console.log("localetest",locale)
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleModal = () => setModal(!modal);
  const handleMouseEnter = () => setIsMegaDropdownOpen(true);
  const handleMouseLeave = () => setIsMegaDropdownOpen(false);
  const localizedLink = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}/${cleanPath}`.replace(/\/+/g, '/');
  };

  const megaDropdownContent = (
    <div className={`mega-dropdown-menu ${isMegaDropdownOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="">
          <h4>
            <Link to={`/${locale}/services`}>
              <FormattedMessage id="nav.services" defaultMessage="Services" />
            </Link>
          </h4>          
            <ul>
            <li>
              <Link to={`/${locale}/services/seo-responsive-web-design`}>
                <img src="/Software Development.svg" alt="All Access" />
                <FormattedMessage id="nav.webDev" defaultMessage="Software and web development" />
              </Link>
            </li>
            <li>
              <Link to={`/${locale}/services/best-mobile-app-developers`}>
                <img src="/Software Product Deployment.svg" alt="All Access" />
                <FormattedMessage id="nav.mobileDev" defaultMessage="Mobile development" />
              </Link>
            </li>              
            <li>
              <Link to={`/${locale}/services/professional-seo-services`}>
                <img src="/SEO page services.svg" alt="All Access" />
                <FormattedMessage id="nav.seo" defaultMessage="SEO page services" />
              </Link>
            </li>              
            <li>
              <Link to={`/${locale}/services/digital-marketing-strategy-consultancy`}>
                <img src="/Detail digital marketing.svg" alt="All Access" />
                <FormattedMessage id="nav.digitalMarketing" defaultMessage="Digital marketing" />
              </Link>
            </li>              
            <li>
              <Link to={`/${locale}/services/social-media-management-services`}>
                <img src="/Productivity 1.svg" alt="All Access" />
                <FormattedMessage id="nav.socialMedia" defaultMessage="Social media management" />
              </Link>
            </li>         
            <li>
              <Link to={`/${locale}/services/ai-software-development-services`}>
                <img src="/Productivity 1.svg" alt="All Access" />
                <FormattedMessage id="nav.AI" defaultMessage="Social media management" />
              </Link>
            </li>         
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="top-header w-full md:px-[70px] flex items-center">
      <nav className="NavBar-sec">
        <div>
          <Link to={`/${locale}`}>
            <img src="/Logo Softylus.svg" alt={intl.formatMessage({ id: "alt.logo", defaultMessage: "Softylus Logo" })} />
          </Link>
        </div>

        <div className="navBar-page">
        <Link to={`/${locale}`}><FormattedMessage id="nav.home" defaultMessage="Home" /></Link>
          <Link to={`/${locale}/projects`}><FormattedMessage id="nav.projects" defaultMessage="Projects" /></Link>
          <div className="mega-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={`/${locale}/services`}>
              <FormattedMessage id="nav.services" defaultMessage="Services" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-arrow">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            {megaDropdownContent}
          </div>
          <Link to={`/${locale}/about`}><FormattedMessage id="nav.about" defaultMessage="About Us" /></Link>
          <Link to={`/${locale}/clients`}><FormattedMessage id="nav.clients" defaultMessage="Clients" /></Link>
          <Link to={`/${locale}/industries`}><FormattedMessage id="nav.industries" defaultMessage="Industries" /></Link>
          <Link to={`/${locale}/blog`}><FormattedMessage id="nav.blog" defaultMessage="Blog" /></Link>
          <Link to={`/${locale}/contact-us`} className="btn-contact contact-pc">
            <FormattedMessage id="nav.contact" defaultMessage="Contact Us" />

          </Link>
          <button onClick={toggleLocale} className="contact-pc switchLanguage-btn">
          <img src="/lang.png"/><FormattedMessage id="app.switchLanguage" defaultMessage="Switch Language" />
        </button>
        </div>

        <div className="NavBar-sec-3">
          <Link to={`/${locale}/contact-us`} className="btn-contact">
            <FormattedMessage id="nav.contact" defaultMessage="Contact Us" />
          </Link>
          <button onClick={toggleLocale} className="switchLanguage-btn">
          <img src="/lang.png"/><FormattedMessage id="app.switchLanguage" defaultMessage="Switch Language" />
        </button>
        </div>
      </nav>
      <div className="nav-menu-btn-container">

        <Button color="danger" onClick={toggleModal}>
          <img src="/menu.svg" alt={intl.formatMessage({ id: "alt.menu", defaultMessage: "Menu" })} />
        </Button>
        <Modal className="mobile-navbar-modal" isOpen={modal} toggle={toggleModal} fullscreen>
          <ModalHeader toggle={toggleModal}>
            <Link to={`/${locale}`}>
              <img src="/Logo Softylus.svg" alt={intl.formatMessage({ id: "alt.logo", defaultMessage: "Softylus Logo" })} />
            </Link>
          </ModalHeader>
          <ModalBody>
            <div className="navBar-hamburger">
            <button onClick={toggleLocale} className=" switchLanguage-btn">
              <img src="/lang.png"/><FormattedMessage id="app.switchLanguage" defaultMessage="Switch Language" />
            </button>
              <button onClick={toggleServicesDropdown} className="services-dropdown-toggle">
                <h4><FormattedMessage id="nav.services" defaultMessage="Services" /></h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={`services-dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
                <Link to={`/${locale}/services`}><FormattedMessage id="nav.allServices" defaultMessage="All Services" /></Link>
                <Link to={`/${locale}/services/seo-responsive-web-design`}><FormattedMessage id="nav.webDev" defaultMessage="Software and web development" /></Link>
                <Link to={`/${locale}/services/best-mobile-app-developers`}><FormattedMessage id="nav.mobileDev" defaultMessage="Mobile development" /></Link>
                <Link to={`/${locale}/services/professional-seo-services`}><FormattedMessage id="nav.seo" defaultMessage="SEO page services" /></Link>
                <Link to={`/${locale}/services/digital-marketing-strategy-consultancy`}><FormattedMessage id="nav.digitalMarketing" defaultMessage="Digital marketing" /></Link>
                <Link to={`/${locale}/services/social-media-management-services`}><FormattedMessage id="nav.socialMedia" defaultMessage="Social media management" /></Link>
                <Link to={`/${locale}/services/ai-software-development-services`}>
                <FormattedMessage id="nav.AI" defaultMessage="Social media management" />
              </Link>
              </div>
              <Link to={`/${locale}/clients`}><FormattedMessage id="nav.clients" defaultMessage="Clients" /></Link>
              <Link to={`/${locale}/about`}><FormattedMessage id="nav.about" defaultMessage="About Us" /></Link>
              <Link to={`/${locale}/projects`}><FormattedMessage id="nav.projects" defaultMessage="Projects" /></Link>
              <Link to={`/${locale}/blog`}><FormattedMessage id="nav.blog" defaultMessage="Blog" /></Link>
              <div className="hamb-sec-3">
                <Link to={`/${locale}/contact-us`} className="btn-contact-hamb">
                  <FormattedMessage id="nav.contact" defaultMessage="Contact Us" />
                </Link>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;