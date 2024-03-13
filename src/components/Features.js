import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faCode,
  faUsers,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const Features = () => {
  const features = [
    {
      icon: faSignal,
      name: "Increased Website Traffic",
      text: "With Boostify, expect a significant boost in website traffic through our tailored strategies and effective advertising campaigns.",
    },
    {
      icon: faCode,
      name: "Professional Website Development",
      text: "We specialize in crafting visually stunning and functional websites that reflect your brand identity and captivate your audience.",
    },
    {
      icon: faUsers,
      name: "Comprehensive Social Media Management",
      text: "Our expert team manages your social media platforms with precision, engaging your audience and driving traffic to your website.",
    },
    {
      icon: faHandHoldingUsd,
      name: "Flexible Pricing Options",
      text: "Choose from our range of pricing options, including a unique tier where you can get a website for free, with the only condition being accurate representation of Boostify in your advertising efforts.",
    },
  ];
  return (
    <section id="features" className="bg-light">
      <Row className="w-100">
        <Col className="col-img" md={6}></Col>
        <Col md={5} className="offset-md-1 mt-5">
          <Row>
            <Col md={8}>
              <h4 className="title-name">WHY CHOOSE US</h4>
              <h1>Our Services</h1>
              <p className="text-justify">
                Boostify is your premier partner in web development and traffic
                generation. We offer top-notch services tailored to elevate your
                online presence and drive your business forward.
              </p>{" "}
            </Col>
          </Row>

          <Row>
            {features.map((feature, index) => {
              return (
                <Col key={index} className="mt-3" md={10}>
                  <div className="feature p-0 d-flex">
                    <div className="icon-box p-0 me-3">
                      <FontAwesomeIcon icon={feature.icon} />
                    </div>
                    <div>
                      <h5>{feature.name}</h5>
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Features;
