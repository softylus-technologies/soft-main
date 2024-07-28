import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./style/NavBar.css";

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const [isMegaDropdownOpen, setIsMegaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  const toggleModal = () => setModal(!modal);

  const handleMouseEnter = () => {
    setIsMegaDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMegaDropdownOpen(false);
  };

  const megaDropdownContent = (
    <div 
      className={`mega-dropdown-menu ${isMegaDropdownOpen ? 'open' : ''}`}
    >
      <div className="container">
        <div className="row">
          <div className="">
            <h4><Link to="/services">services</Link></h4>
            <ul>
              <li><Link to="/detail-web-dev"><img src="/icon3.svg" alt="All Access"/>Software and web development</Link></li>
              <li><Link to="/detail-mobile"><img src="/icon3.svg" alt="All Access"/>Mobile development</Link></li>
              <li><Link to="/detail-seo"><img src="/icon3.svg" alt="All Access"/>SEO page services</Link></li>
              <li><Link to="/detail-digital-marketing"><img src="/icon3.svg" alt="All Access"/>Detail digital marketing</Link></li>
              <li><Link to="/detail-smm"><img src="/icon3.svg" alt="All Access"/>Social media management</Link></li>
            </ul>
          </div>
          {/* <div className="col-md-4">
            <h4>Data Analysis</h4>
            <ul>
              <li><Link to="/competitor-analysis"><img src="/icon3.svg" alt="All Access"/>Competitor Analysis</Link></li>
              <li><Link to="/price-monitoring"><img src="/icon3.svg" alt="All Access"/>Price Monitoring</Link></li>
              <li><Link to="/sentiment-analysis"><img src="/icon3.svg" alt="All Access"/>Sentiment Analysis</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Industries</h4>
            <ul>
              <li><Link to="/finance"><img src="/icon3.svg" alt="All Access"/>Finance</Link></li>
              <li><Link to="/real-estate"><img src="/icon3.svg" alt="All Access"/>Real Estate</Link></li>
              <li><Link to="/travel"><img src="/icon3.svg" alt="All Access"/>Travel</Link></li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <div className="top-header w-full md:px-[70px] flex items-center">
      <nav className="NavBar-sec">
        <div>
          <Link to="/">
            <img src="/Logo Softylus.svg" alt="Softylus Logo" />
          </Link>
        </div>

        <div className="navBar-page">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <div
            className="mega-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/services">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dropdown-arrow"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>
            {megaDropdownContent}
          </div>
          <Link to="/about">About Us</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us" className="btn-contact contact-pc">
            Contact Us
          </Link>
        </div>

        <div className="NavBar-sec-3">
          <Link to="/contact-us" className="btn-contact">
            Contact Us
          </Link>
        </div>
      </nav>
      <div className="nav-menu-btn-container">
        <Button color="danger" onClick={toggleModal}>
          <img src="/menu.svg" alt="Menu" />
        </Button>
        <Modal
          className="mobile-navbar-modal"
          isOpen={modal}
          toggle={toggleModal}
          fullscreen
        >
          <ModalHeader toggle={toggleModal}>
            <Link to="/">
              <img src="/Logo Softylus.svg" alt="Softylus Logo" />
            </Link>
          </ModalHeader>
          <ModalBody>
            <div className="navBar-hamburger">
            <button onClick={toggleServicesDropdown} className="services-dropdown-toggle">
              <h4>Services</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`services-dropdown-menu ${isServicesDropdownOpen ? 'open' : ''}`}>
              <Link to="/services">All Services</Link>
              <Link to="/detail-web-dev">Software and web development</Link>
              <Link to="/detail-mobile">Mobile development</Link>
              <Link to="/detail-seo">SEO page services</Link>
              <Link to="/detail-digital-marketing">Digital marketing</Link>
              <Link to="/detail-smm">Social media management</Link>
            </div>
              <Link to="/clients">Clients</Link>
              <Link to="/about">About Us</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <div className="hamb-sec-3">
                <Link to="/contact-us" className="btn-contact-hamb">
                  Contact Us
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