import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import "./AboutUs.css";
import Slide from "react-reveal/Slide";
import member1 from "../../../images/teamMembers/team_01.jpg";
import member2 from "../../../images/teamMembers/team_02.jpg";
import member3 from "../../../images/teamMembers/team_03.jpg";
import member4 from "../../../images/teamMembers/team_04.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs-section">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="aboutUs-text text-white">
                <Slide left>
                  <h1>About Drone World</h1>
                </Slide>
                <p>
                  At Drone world, we provide professional Drone services for the
                  Bloging,Photography, shooting.Besides we sell those
                  professional usages and Our mantain the best quality
                </p>
              </div>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </Container>
      </div>
      <div className="team-section">
        <Container>
          <div className="team-header">
            <Slide left>
              <h1>Our Dedicated Team Members</h1>
            </Slide>
          </div>
          <Row>
            <Col sm={12} md={3}>
              <Card className="about-section-card">
                <Card.Img variant="top" src={member1} />
                <Card.Body>
                  <Card.Text>
                    <h5>Pilot</h5>
                    <h3>Stephen John</h3>
                    <p>
                      Experienced photographer, videographer, film editor and
                      responsible pilot.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="about-section-card">
                <Card.Img variant="top" src={member2} />
                <Card.Body>
                  <Card.Text>
                    <h5>Engineer</h5>
                    <h3>Jonathon Brayn</h3>
                    <p>
                      Ten years of flying experience. Affordable UAV services
                      for aerial drone inspections.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="about-section-card">
                <Card.Img variant="top" src={member3} />
                <Card.Body>
                  <Card.Text>
                    <h5>Pilot</h5>
                    <h3>Thomas Pemutte</h3>
                    <p>
                      Professional photojournalist for the local CBS affiliate &
                      recently freelance drone pilot.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="about-section-card">
                <Card.Img variant="top" src={member4} />
                <Card.Body>
                  <Card.Text>
                    <h5>Pilot</h5>
                    <h3>Noland jay</h3>
                    <p>
                      Licensed 107 and 33 exempt drone operator with more than
                      five years flying experience.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
