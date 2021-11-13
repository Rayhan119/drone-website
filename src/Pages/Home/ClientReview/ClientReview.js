import React, { useEffect, useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import "./ClientReview.css";
import ClientReviewDetail from "./ClientReviewDetail/ClientReviewDetail";
const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="review-section">
      <div className="client-review-header">
        <h1>Our Respective Client Reviews</h1>
      </div>
      <Container>
        <Row>
          {reviews.map((review) => (
            <ClientReviewDetail
              key={review._id}
              review={review}
            ></ClientReviewDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ClientReview;
