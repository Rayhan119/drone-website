import React from "react";
import Slide from "react-reveal/Slide";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./ServiceDetail.css";
const ServiceDetail = (props) => {
  const { _id, name, description, img, price } = props.service;

  return (
    <Col sm={12} md={4}>
      <Slide left>
        <Card className="serviceDetail-card" style={{ width: "22rem" }}>
          <Card.Img
            src={img}
            style={({ width: "100%" }, { height: "220px" })}
          />
          <Card.Body>
            <Card.Title>
              {" "}
              <h3>{name}</h3>{" "}
            </Card.Title>
            <Card.Text>
              <p>{description.slice(0, 130)}</p>
              <span>Price</span> : {price}$
            </Card.Text>
            <NavLink to={`/shop/${_id}`}>
              {" "}
              <div className="service-btn">
                <Button>Buy Now</Button>
              </div>{" "}
            </NavLink>
          </Card.Body>
        </Card>
      </Slide>
    </Col>
  );
};
// {
//   /* <NavLink to={`/services/${_id}`}>
//   <div className="service-detail-btn">
//     <Button>View Details</Button>
//   </div>
// </NavLink>; */
// }
export default ServiceDetail;
