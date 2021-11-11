import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import "./ClientReview.css";
const ClientReview = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="client-review-header">
            <h2>Our Great Clients</h2>
          </div>
          <div className="client-carousel"></div>
        </Row>
      </Container>
    </div>
  );
};

export default ClientReview;
