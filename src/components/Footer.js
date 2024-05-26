import React from "react";
import "./style/Footer.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer class="bg-transparent py-20 relative">
        <div class="mx-auto w-full md:px-[70px] ">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <img
                src="/Logo_Softylus.svg"
                alt="Softylus Logo"
                className="logo"
              />
              <address>
                <p>Riyadh, Saudi Arabia</p>
                <p>Zarqa, Jordan</p>
              </address>
              <div className="social-icon">
                <Link
                  href="https://www.linkedin.com/company/softylus"
                  aria-label="Visit Instagram page"
                >
                  <img src="/linkedin-icon.svg" />
                </Link>
                <Link
                  href="https://web.facebook.com/softylus?_rdc=1&_rdr"
                  aria-label="Visit Facebook page"
                >
                  <img src="/facebook-icon.svg" alt="Facebook" />
                </Link>
              </div>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium p-0">
                <li class="mb-2 text-white	">
                  <Link to="/about" className="text-white	no-underline">
                    About Softylus
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/industries">
                    Industries
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/careers">
                    Careers
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/clients">
                    Clients
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/contact-us">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Services
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium p-0">
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/detail-web-dev">
                    Software and web development
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/detail-mobile">
                    Mobile development
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/detail-seo">
                    SEO page services
                  </Link>
                </li>
                <li class="mb-2">
                  <Link
                    className="text-white	no-underline"
                    to="/detail-digital-marketing"
                  >
                    Detail digital marketing
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/detail-smm">
                    Social media management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium p-0">
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/detail-web-dev">
                    UI/UX
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/about">
                    Hosting Services
                  </Link>
                </li>
                <li class="mb-2">
                  <Link className="text-white	no-underline" to="/about">
                    Follow-Up and maintenance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <img
          className="circle bottom-0 !left-0"
          id="circle1"
          src="/Vector (7).svg"
        />
      </footer>
      {/* 
      <footer className="Footer-container">
        <div className="Footer-sec">
          <div className="Footer-sec-1">
            <img
              src="/logo_Softylus.svg"
              alt="Softylus Logo"
              className="logo"
            />
            <address>
              <p>Riyadh, Saudi Arabia</p>
              <p>Zarqa, Jordan</p>
            </address>
            <div className="social-icon">
              <Link
                href="https://www.linkedin.com/company/softylus"
                aria-label="Visit Instagram page"
              >
                <img src="/linkedin-icon.svg" />
              </Link>
              <Link
                href="https://web.facebook.com/softylus?_rdc=1&_rdr"
                aria-label="Visit Facebook page"
              >
                <img src="/facebook-icon.svg" alt="Facebook" />
              </Link>
            </div>
          </div>
          <nav className="Footer-sec-2">
            <ul>
              <li>
                <Link to="/About">About Softylus</Link>
              </li>
              <li>
                <Link to="/Industries">Industries</Link>
              </li>
              <li>
                <Link to="/Careers">Careers</Link>
              </li>
              <li>
                <Link to="/Clients">Clients</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          </nav>
          <nav className="Footer-sec-2">
            <ul>
              <li>
                <Link to="/DetailWebDev">Software and web development</Link>
              </li>
              <li>
                <Link to="/DetailMobile">Mobile development</Link>
              </li>
              <li>
                <Link to="/DetailSeo">SEO page services</Link>
              </li>
              <li>
                <Link to="/DetailDigitalMarketing">
                  Detail digital marketing
                </Link>
              </li>
              <li>
                <Link to="/DetailSMM">Social media management</Link>
              </li>
            </ul>
          </nav>

        </div>
      </footer> */}
    </>
  );
};

export default Footer;
