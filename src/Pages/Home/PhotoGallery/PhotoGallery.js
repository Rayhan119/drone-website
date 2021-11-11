import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PhotoGallery.css";
import gallery1 from "../../../images/galler-photo/drone-gallery1.jpg";
import gallery2 from "../../../images/galler-photo/drone-gallery2.jpg";
import gallery3 from "../../../images/galler-photo/drone-gallery3.jpg";
import gallery4 from "../../../images/galler-photo/drone-gallery4.jpg";
import gallery5 from "../../../images/galler-photo/drone-gallery5.jpg";
import gallery6 from "../../../images/galler-photo/drone-gallery6.jpg";
import gallery7 from "../../../images/galler-photo/drone-gallery7.jpg";
import gallery8 from "../../../images/galler-photo/drone-gallery8.jpg";
import Slide from "react-reveal/Slide";

const PhotoGallery = () => {
  return (
    <div className="photo-gallery-section">
      <Container className="photo-gallery">
        <div className="photo-gallery-header">
          <Slide left>
            <h1>Creative Photo Gallery</h1>
          </Slide>
        </div>
        <Row>
          <Col sm={12} md={3}>
            <img src={gallery1} alt="" />
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery2} alt="" />
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery3} alt="" />
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery4} alt="" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={3}>
            <img src={gallery5} alt="" />{" "}
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery6} alt="" />
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery7} alt="" />
          </Col>
          <Col sm={12} md={3}>
            <img src={gallery8} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhotoGallery;
