import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import Slide from "react-reveal/Slide";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://blooming-chamber-22086.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <div className="services-section">
        <div className="services-header">
          <Slide top>
            <h4>Shop Here</h4>
          </Slide>
          <hr />
          <Slide left>
            <h1>our best</h1>
          </Slide>
        </div>
      </div>
      <Container>
        <Row className="m-auto servicesDetail-card">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service}></ServiceDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
