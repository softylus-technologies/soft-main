import React, { useState } from "react"; // Import useState
import "./style/NavBar.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dropdown from'react-bootstrap/Dropdown';
const NavBar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full pt-4 md:px-[70px]  flex">
      <nav className="NavBar-sec">
        <div>
          <Link to="../">
            <img src="/Logo Softylus.svg" alt="Softylus Logo" />
          </Link>
        </div>

        <div className="navBar-page">
       <Link to="../../">Home</Link>  
       <Link to="/projects">Projects</Link>
      <Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={isOpen} 
      >
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
            <Link to="/services">Services</Link>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/detail-web-dev">Software and web development</Dropdown.Item>
        <Dropdown.Item href="/detail-mobile">Mobile development</Dropdown.Item>
        <Dropdown.Item href="/detail-seo">SEO page services</Dropdown.Item>
        <Dropdown.Item href="/detail-digital-marketing/">Detail digital marketing</Dropdown.Item>
        <Dropdown.Item href="/detail-smm">Social media management</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
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
      <div>
        <Button color="danger" onClick={toggle}>
          <img src="/menu.svg" />
        </Button>
        <Modal isOpen={modal} toggle={toggle} fullscreen>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <div className="navBar-hamburger">
              <Link to="../" className="mx-auto">
                <img src="/Logo Softylus.svg" alt="Softylus Logo" />
              </Link>
              <Link to="/services">Services</Link>
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
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default NavBar;
