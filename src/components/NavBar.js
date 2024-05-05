import React, { useState } from "react"; // Import useState
import "./style/NavBar.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="w-full pt-4 md:px-[70px]  flex">
      <nav className="NavBar-sec">
        <div>
          <Link to="../">
            <img src="/Logo Softylus.svg" alt="Softylus Logo" />
          </Link>
        </div>

        <div className="navBar-page">
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact-us" className="btn-contact contact-pc">
            Contact Us
          </Link>
        </div>

        <div className="NavBar-sec-3">
          <Link to="/ContactUs" className="btn-contact">
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
              <Link to="/Services">Services</Link>
              <Link to="/Clients">Clients</Link>
              <Link to="/About">About Us</Link>
              <Link to="/Projects">Projects</Link>
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
