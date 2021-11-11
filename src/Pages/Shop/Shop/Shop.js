import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ShopDetail from "../ShopDetail/ShopDetail";
import "./Shop.css";
import Slide from "react-reveal/Slide";
const Shop = () => {
  const [shopServices, setShopServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setShopServices(data));
  }, []);
  return (
    <div>
      <div className="shop-section">
        <div className="shop-header">
          <Slide left>
            <h1>Find Your Products</h1>
          </Slide>
          <Slide right>
            <h4>We Ensure best Quality of all Time</h4>
          </Slide>
        </div>
      </div>
      <Container className="py-5">
        <Row className="m-auto ShopDetail-card">
          {shopServices.map((service) => (
            <ShopDetail key={service.id} service={service}></ShopDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
