import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row className="footer-top">
          <Col lg={3}>
            <h1>BOOST-IFY</h1>
          </Col>
          <Col lg={3}>
            <h4>BRAND</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4>MORE</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Privacy&Policy</a>
              </li>
              <li>
                <a href="#">Warrenty</a>
              </li>
              <li>
                <a href="#">Shipment</a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">PORTFOLIO</a>
              </li>
              <li>
                <a href="#">TEAM</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col md={6}>&copy;Boostify</Col>
          <Col md={6}>
            <div className="sosials ">
              <div className="icon-box">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="icon-box">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="icon-box">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
