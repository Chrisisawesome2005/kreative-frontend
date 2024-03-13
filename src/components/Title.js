import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Title = ({ name, title, text }) => {
  return (
    <Container>
      <Row>
        <Col className="title" md={8}>
          <h4 className="title-name">{name.toUpperCase()}</h4>
          <h1>{title}</h1>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
