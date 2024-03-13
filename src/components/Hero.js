import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row>
          <Col className="text-center" md={12}>
            <h1 className="display-3 text-white">
              Elevate Your Online Presence with Boostify
            </h1>
            <p className="lead text-white">
              Discover the power of Boostify's tailored strategies and expert
              services in web development, advertising, and social media
              management.
            </p>
            <div className="mt-4">
              <Button className="me-2" variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
