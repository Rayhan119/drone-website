import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import OrderModal from "../OrderModal/OrderModal";

import "./Details.css";
const Details = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //redirect
  const history = useHistory();
  const location = useLocation();
  const redirect = "/home";
  //react form
  const { register, handleSubmit, reset } = useForm();
  //user axios
  const [data, setData] = useState({});

  const { _id, ...rest } = data;

  const { id } = useParams();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch(`https://blooming-chamber-22086.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="service-details-bg">
        <Container className="service-details-section">
          <Row>
            <Col sm={12} md={6}>
              <div className="service-detail-img ">
                <img src={data.img} alt="" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="details-info">
                <h3>
                  Name : <span>{data.name}</span>{" "}
                </h3>
                <h3>Details</h3>
                <p>{data.description}</p>
                <h3>
                  Price : <span>{data.price} $</span>{" "}
                </h3>

                <div className="order-place-btn">
                  <button onClick={handleShow}>Order Now</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <OrderModal
        show={show}
        handleClose={handleClose}
        data={data}
      ></OrderModal>
    </>
  );
};

export default Details;
