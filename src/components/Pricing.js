import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$99",
      packageIncludes: ["Premium Support", "1-hour Management"],
    },
    {
      name: "Standard",
      price: "$199",
      packageIncludes: [
        "Premium Support",
        "3-hour Management",
        "Social Media Management",
      ],
    },
    {
      name: "Professional",
      price: "$299",
      packageIncludes: [
        "Premium Support",
        "5-hour Management",
        "Social Media Management",
        "SEO Optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      packageIncludes: [
        "Tailored Support",
        "Unlimited Management",
        "Full Marketing Suite",
      ],
    },
  ];
  return (
    <section id="pricing">
      <Title
        name={"pricing"}
        title={"Our Fair & Easy Pricing"}
        text={
          "Boostify offers transparent and flexible pricing plans designed to meet the needs of businesses of all sizes. Choose the package that suits you best and elevate your online presence with confidence."
        }
      />
      <Container>
        <Row className="g-3">
          {packages.map((ourPackage, index) => {
            return (
              <Col key={index} lg={3} sm={6}>
                <div
                  className="price card-effect d-flex flex-column justify-content-between p-2"
                  style={{ height: "100%" }}
                >
                  <div>
                    <h6>{ourPackage.name}</h6>
                    <h4>{ourPackage.price}</h4>
                    <hr />
                    <ul className="list-unstyled">
                      {ourPackage.packageIncludes.map((includes, i) => {
                        return (
                          <li key={i}>
                            <div className="icon">
                              <FontAwesomeIcon icon={faCheck} />
                            </div>
                            {includes}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Button variant="outline-primary">Get Started</Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
