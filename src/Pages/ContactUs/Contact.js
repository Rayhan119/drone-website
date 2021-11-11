import React from "react";
//slide
import Slide from "react-reveal/Slide";
//import from react bootstrap
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
//images import
import contactImg from "../../images/contact_us.png";
const Contact = () => {
  return (
    <div>
      <div className="contact-section">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className="contact-section-header">
                <Slide left>
                  <h1>Contact Us</h1>
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
      <Container>
        <Row>
          <Slide top>
            <h1 className="contact-header">Contact Us </h1>
          </Slide>
          <Slide left>
            <div className="contact-form">
              <div className="contact-form-left">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Your Name.."
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="email" placeholder="Email" required />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control type="text" placeholder="website" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      placeholder="messege"
                      as="textarea"
                      rows={5}
                    />
                  </Form.Group>
                  <div className="form-btn">
                    <Button>Send messege</Button>
                  </div>
                </Form>
              </div>
              <div className="contact-form-right">
                <img src={contactImg} alt="" />
              </div>
            </div>
          </Slide>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
