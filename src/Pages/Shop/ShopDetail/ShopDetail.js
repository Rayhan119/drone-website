import React from "react";
import "./ShopDetail.css";
import Slide from "react-reveal/Slide";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const ShopDetail = (props) => {
  const { _id, name, description, img, price } = props.service;
  return (
    <Col sm={12} md={4}>
      <Slide left>
        <Card className="shopDetail-card" style={{ width: "22rem" }}>
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
              <p>{description.slice(0, 120)}</p>
              <span>Price</span> : {price}$
            </Card.Text>
            <NavLink to={`/shop/${_id}`}>
              {" "}
              <div className="shop-btn">
                <Button>Buy Now</Button>
              </div>{" "}
            </NavLink>
          </Card.Body>
        </Card>
      </Slide>
    </Col>
  );
};

export default ShopDetail;
