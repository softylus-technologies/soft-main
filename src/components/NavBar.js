import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FormattedMessage, useIntl } from "react-intl";
import "./style/NavBar.css";

const NavBar = ({toggleLocale}) => {
  const [modal, setModal] = useState(false);
  const [isMegaDropdownOpen, setIsMegaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const intl = useIntl();

  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);
  const toggleModal = () => setModal(!modal);
  const handleMouseEnter = () => setIsMegaDropdownOpen(true);
  const handleMouseLeave = () => setIsMegaDropdownOpen(false);

  const megaDropdownContent = (
    <div className={`mega-dropdown-menu ${isMegaDropdownOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="">
            <h4><Link to="/services"><FormattedMessage id="nav.services" defaultMessage="Services" /></Link></h4>
            <ul>
              <li><Link to="/detail-web-dev"><img src="/Software Development.svg" alt="All Access"/><FormattedMessage id="nav.webDev" defaultMessage="Software and web development" /></Link></li>
              <li><Link to="/detail-mobile"><img src="/Software Product Deployment.svg" alt="All Access"/><FormattedMessage id="nav.mobileDev" defaultMessage="Mobile development" /></Link></li>
              <li><Link to="/detail-seo"><img src="/SEO page services.svg" alt="All Access"/><FormattedMessage id="nav.seo" defaultMessage="SEO page services" /></Link></li>
              <li><Link to="/detail-digital-marketing"><img src="/Detail digital marketing.svg" alt="All Access"/><FormattedMessage id="nav.digitalMarketing" defaultMessage="Digital marketing" /></Link></li>
              <li><Link to="/detail-smm"><img src="/Productivity 1.svg" alt="All Access"/><FormattedMessage id="nav.socialMedia" defaultMessage="Social media management" /></Link></li>
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
          <Link to="/">
            <img src="/Logo Softylus.svg" alt={intl.formatMessage({ id: "alt.logo", defaultMessage: "Softylus Logo" })} />
          </Link>
        </div>

        <div className="navBar-page">
          <Link to="/"><FormattedMessage id="nav.home" defaultMessage="Home" /></Link>
          <Link to="/projects"><FormattedMessage id="nav.projects" defaultMessage="Projects" /></Link>
          <div className="mega-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="/services">
              <FormattedMessage id="nav.services" defaultMessage="Services" />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dropdown-arrow">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            {megaDropdownContent}
          </div>
          <Link to="/about"><FormattedMessage id="nav.about" defaultMessage="About Us" /></Link>
          <Link to="/clients"><FormattedMessage id="nav.clients" defaultMessage="Clients" /></Link>
          <Link to="/industries"><FormattedMessage id="nav.industries" defaultMessage="Industries" /></Link>
          <Link to="/blog"><FormattedMessage id="nav.blog" defaultMessage="Blog" /></Link>
          <Link to="/contact-us" className="btn-contact contact-pc">
            <FormattedMessage id="nav.contact" defaultMessage="Contact Us" />

          </Link>
          <button onClick={toggleLocale} className="contact-pc switchLanguage-btn">
          <img src="/lang.png"/><FormattedMessage id="app.switchLanguage" defaultMessage="Switch Language" />
        </button>
        </div>

        <div className="NavBar-sec-3">
          <Link to="/contact-us" className="btn-contact">
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
            <Link to="/">
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
                <Link to="/services"><FormattedMessage id="nav.allServices" defaultMessage="All Services" /></Link>
                <Link to="/detail-web-dev"><FormattedMessage id="nav.webDev" defaultMessage="Software and web development" /></Link>
                <Link to="/detail-mobile"><FormattedMessage id="nav.mobileDev" defaultMessage="Mobile development" /></Link>
                <Link to="/detail-seo"><FormattedMessage id="nav.seo" defaultMessage="SEO page services" /></Link>
                <Link to="/detail-digital-marketing"><FormattedMessage id="nav.digitalMarketing" defaultMessage="Digital marketing" /></Link>
                <Link to="/detail-smm"><FormattedMessage id="nav.socialMedia" defaultMessage="Social media management" /></Link>
              </div>
              <Link to="/clients"><FormattedMessage id="nav.clients" defaultMessage="Clients" /></Link>
              <Link to="/about"><FormattedMessage id="nav.about" defaultMessage="About Us" /></Link>
              <Link to="/projects"><FormattedMessage id="nav.projects" defaultMessage="Projects" /></Link>
              <Link to="/blog"><FormattedMessage id="nav.blog" defaultMessage="Blog" /></Link>
              <div className="hamb-sec-3">
                <Link to="/contact-us" className="btn-contact-hamb">
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