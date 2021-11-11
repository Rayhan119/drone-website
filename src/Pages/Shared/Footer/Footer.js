import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div className="footer-section-left">
              <h2 className="text-center py-3">Drone World</h2>
              <p className="footer-about-section">
                we provide a good service for the users.We have a good will in
                the this particular sector.Our has almos 50+ Engineer who work
                for the devolpment and providing the latest and modern
                Techno.... So getting a Best and Latest Drone please contact
                with us..Thank you for the visiting...
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="follow-us-section">
              <h2 className="text-center py-3 text-white">Follow Us</h2>
              <div className="social-link">
                <ul>
                  <li>
                    <i class="fab fa-facebook"></i>
                    <span>Facebook</span>
                  </li>
                  <li>
                    {" "}
                    <i class="fab fa-twitter"></i>
                    <span>Twitter</span>
                  </li>
                  <li>
                    <i class="fab fa-youtube"></i> <span>Youtube</span>
                  </li>
                  <li>
                    <i class="fab fa-linkedin"></i>
                    <span>Linkedin</span>
                  </li>
                  <li>
                    <i class="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="subscribe-section">
              <div className="subscribe-text text-center ">
                <h2 className="text-center py-3 text-white">Newsletter</h2>
                <p>
                  Get 30 % discount storewide just by subscribing to our weekly
                  newsletter
                </p>
              </div>
              <div className="subscribe-input">
                <input type="email" placeholder="Your email" />
                <div className="footer-btn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="copyrygiht-section text-center text-white">
        <p>all rights reserverd by @Drone World||2021</p>
      </div>
    </div>
  );
};

export default Footer;
