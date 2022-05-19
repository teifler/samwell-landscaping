import React from "react";
import "./Contact.css";
import { SiInstagram } from "react-icons/si";
import { AiOutlineFacebook } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Contact() {
  return (
    <div id="contact">
      <div id="#" className="whole-contact">
        <div className="contact-container">
          <div className="footer-logo">
            <Link
              to="header"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={100}
              className="contact-logo"
            >
              <img className="footLogo" src="Images/logo3.png" alt="" />
            </Link>
            <p className="fill-out-form">
              <Link
                className="fotf"
                to="quotes"
                activeclass="active"
                spy={true}
                smooth={true}
                offset={-75}
                duration={100}
              >
                Fill out the form
              </Link>{" "}
              above or{" "}
              <a className="number-link" href="tel:+5125882677">
                give us a call
              </a>{" "}
              for a free quote!
            </p>
            <div className="icons">
              <a href="https://www.facebook.com/samwelllandscaping/" target="_blank" rel="noreferrer">
                <AiOutlineFacebook className="facebook" />
              </a>
              <a href="https://www.instagram.com/a_zlandscape/?igshid=1a6fezg7wyr61" target="_blank" rel="noreferrer">
                <SiInstagram className="instagram" />
              </a>
            </div>
          </div>
          <div className="about">
            <p className="contact-head">ABOUT</p>
            <p className="abt-div">
              Founded in 2019, SamWell's Landscaping & Stonework, Ltd, is a family owned and operated commercial &
              residential landscape business serving Vancouver Island and surrounding areas.
            </p>
          </div>
          <div className="contact">
            <p className="contact-head">CONTACT</p>
            <a className="email-link" href="mailto: ouellette.samuel@hotmail.ca">
              <p>ouellette.samuel@hotmail.ca</p>
            </a>
            <a className="number-link" href="tel:+16047219694">
              <p>+1 604-721-9694</p>
            </a>
          </div>
          <div className="explore">
            <p className="contact-head">EXPLORE</p>
            <Link
              to="header"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              className="contact-links"
            >
              Home
            </Link>
            <Link
              to="wcu"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-120}
              duration={100}
              className="contact-links"
            >
              Why Choose Us?
            </Link>
            <Link
              to="servicez"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              className="contact-links"
            >
              Our Services
            </Link>
            <Link
              to="values"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
              className="contact-links"
            >
              Our Values
            </Link>
            <Link
              to="quote"
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-80}
              duration={100}
              className="contact-links"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
