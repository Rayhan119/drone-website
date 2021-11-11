import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Works.css";
import Slide from "react-reveal/Slide";
const Works = () => {
  return (
    <div>
      <Container>
        <div className="works-header">
          <Slide left>
            <h1>How To Use</h1>
          </Slide>
        </div>
        <Row className="works-main">
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-battery-three-quarters"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4>How To Use Battery</h4>
                  <p>
                    Consumer drones run on electricity, unlike their big
                    brothers in the military that use some form of a combustion
                    engine (or solar)
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-video"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4>How To Play Video </h4>
                  <p>
                    Why live stream video from a drone? Live streaming and drone
                    cameras are a truly great combination. Drone live streams
                    basically give humans
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-helicopter"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4>How To Fly Drone</h4>
                  <p>
                    To fly a drone left, right, forwards, and backwards, you
                    will need to hold the throttle at a steady rate to keep it
                    airborne. You will then use the right stick
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-gamepad"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4>How To Use Controler</h4>
                  <p>
                    A very important component of the modern drone is a flight
                    controller. ... and radio frequencies right now, but
                    cellular solutions are also already in use.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-camera-retro"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4>How To use Camera</h4>
                  <p>
                    Just move the joystick forward to ascend, backward to
                    descend, and left or right to rotateWith the right joystick,
                    you can accelerate forward,
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="works-card">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="works-card-icon">
                    <i class="fas fa-mobile-alt"></i>
                  </div>
                </Card.Title>
                <Card.Text>
                  <h4> connect with my phone</h4>
                  <p>
                    First, download your drones app onto your mobile phone. ·
                    Turn on your drone. · Connect your mobile device to the
                    drone. Either via WIFI or by connecting the
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Works;
