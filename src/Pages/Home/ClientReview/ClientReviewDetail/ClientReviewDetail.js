import React from "react";
import { Card, Col } from "react-bootstrap";
import "./ClientReviewDetail.css";
const ClientReviewDetail = ({ review }) => {
  return (
    <Col sm={12} md={4}>
      <Card className="reviews-card">
        <Card.Body>
          <i class="fas fa-quote-left"></i>
          <p>{review.description.slice(0, 150)}</p>
          <div className="left-quota">
            <i class="fas fa-quote-right"></i>
          </div>
          <Card.Text>
            <div className="reviewer-img">
              <img src={review.img} alt="" />
            </div>
            <h6>{review.name}</h6>

            <h6>{review.email}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ClientReviewDetail;
