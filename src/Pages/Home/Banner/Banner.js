import React from "react";
import Slide from "react-reveal/Slide";
import {
  Button,
  Carousel,
  Col,
  Container,
  Offcanvas,
  Row,
} from "react-bootstrap";
import img1 from "../../../images/sldierImages/slider-drone1.png";
import img2 from "../../../images/sldierImages/slider-drone2.png";
import img3 from "../../../images/sldierImages/slider-drone3.png";
import "./Banner.css";
import Header from "../../Shared/Header/Header";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-bg">
      <Container>
        <Row className="banner-section">
          <Col sm={12} md={6}>
            <div className="banner-text text-white">
              <h5>Explore Drone Technology</h5>
              <Slide left>
                <h1>We are made with style & commitment</h1>
              </Slide>
              <p>
                Drone-world contain the best drone technology for every type of
                user and shooting scenario. If you are looking for a beginner
                drone, professional drone, or simply want to upgrade to the
                latest technology, it’s time to discover the best one.....
              </p>
              <Link to="/home">
                <div className="banner-text-button">
                  <button>Read more</button>
                </div>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <Carousel className="banner-carousel">
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
                <Link to="/shop">
                  <div className="button-carousel">
                    <button>Buy Now</button>
                  </div>
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
                <Link to="/shop">
                  <div className="button-carousel">
                    <button>Buy Now</button>
                  </div>
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
                <Link to="/shop">
                  <div className="button-carousel">
                    <button>Buy Now</button>
                  </div>
                </Link>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
