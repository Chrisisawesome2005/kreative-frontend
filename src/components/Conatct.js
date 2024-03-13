import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

const Conatct = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col className="title" md={8}>
            <h4 className="text-white">CONTACT</h4>
            <h1 className="text-white">Get In Touch</h1>
            <p className="text-white">
              efeffe fe fef ef ef ef wef wef wef wef w efw ef{" "}
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto contact-form" md={8}>
            <Row className="form g-3">
              <Col sm={6}>
                <Form.Control type="text" placeholder="Name" />
              </Col>
              <Col sm={6}>
                <Form.Control type="text" placeholder="Surname" />
              </Col>
              <Col sm={12}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
              <Col sm={12}>
                <Form.Control type="text" placeholder="Subject" />
              </Col>
              <Col sm={12}>
                <Form.Control as="textarea" rows={5} placeholder="Message" />
              </Col>
              <Button>Send Message</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Conatct;
