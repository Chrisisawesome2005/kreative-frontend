import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faBullhorn,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"; // Imported additional icons
import Title from "./Title";

const Services = () => {
  const services = [
    {
      icon: faDesktop,
      name: "Web Design",
      text: "Crafting stunning websites tailored to your brand's identity and objectives. Our team of experienced designers and developers will work closely with you to create a visually appealing and user-friendly website that reflects your brand's unique personality. From responsive layouts to seamless navigation, we ensure that your website not only looks great but also performs flawlessly across all devices.",
    },
    {
      icon: faBullhorn,
      name: "Advertising",
      text: "Strategic advertising campaigns to boost your brand's visibility and reach. With our data-driven approach, we analyze market trends, target audience behavior, and competitor strategies to develop customized advertising solutions that deliver measurable results. Whether it's PPC campaigns, social media ads, or display advertising, we'll help you reach your target audience effectively and maximize your ROI.",
    },
    {
      icon: faUsers,
      name: "Social Media Management",
      text: "Engage and grow your audience with our expert social media management services. From content creation to community engagement, we handle all aspects of your social media presence to enhance brand awareness, foster meaningful connections, and drive user engagement. Our team of social media specialists will develop tailored strategies, create compelling content, and manage your social channels to help you build a loyal following and achieve your business goals.",
    },
  ];
  return (
    <section id="services">
      <Container>
        <Title
          name={"services"}
          title={"Discover Our Services"}
          text={
            "Explore our comprehensive range of services designed to elevate your brand."
          }
        />
        <Row className="g-3">
          {services.map((service, index) => {
            return (
              <Col key={index} className="d-flex" md={4} sm={6}>
                <div className="card-effect service p-2 ">
                  <div className="icon-box ">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
