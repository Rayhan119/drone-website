import React from "react";
import "./Review.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import swal from "sweetalert";
const Review = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = "/home";
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        swal("Good job!", "Thank You very much for Your Review", "success");
        history.push(redirect);
        reset();
      }
    });
  };
  return (
    <div className="review-section">
      <div className="review-section-header">
        <h2>Please Give Yours Opinions!!</h2>
      </div>
      <Container>
        <Row className="review-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input required placeholder="Image Url" {...register("img")} />
            <input required placeholder="email" {...register("email")} />
            <input required placeholder="Your name" {...register("name")} />
            <input
              required
              placeholder="Give Comments!!"
              {...register("description")}
            />

            <div className="review-btn">
              <input type="submit" value="Post" />
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
