import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <div id="header" className="header-container">
      <div className="whole-caro">
        <div>
          <Carousel fade={true} controls={false} className="carousel" indicators={false}>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/masonry11.JPG" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/masonry24.JPG" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/render.JPG" alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/masonry10.JPG" alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/masonry.JPG" alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100 carousel-image" src="Images/render4.jpeg" alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="header-wordz">
        <div className="txt-div">
          <p id="onehead" className="header-txt">
            SamWell's Landscaping
          </p>
          <p className="header-txt">& Stonework</p>
          <p className="sub-header">SERVING COMOX VALLEY AREA</p>
          <div className="header-buttons">
            <Link id="buttonid" to="quote" activeclass="active" spy={true} smooth={true} offset={-90} duration={100}>
              <button type="button" className="btn btn-outline-light">
                Get A Quote
              </button>
            </Link>
            <Link id="buttonid" to="servicez" activeclass="active" spy={true} smooth={true} offset={-90} duration={100}>
              <button type="button" className="btn btn-outline-light">
                Our Services
              </button>
            </Link>
          </div>
        </div>
        <div className="quote-div"></div>
      </div>
    </div>
  );
}
