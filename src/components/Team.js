import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Title from "./Title";

const Team = () => {
  const teamMembers = [
    {
      image: "team1.jpg",
      name: "Chris Badenhorst",
      role: "Web designer",
    },
    {
      image: "team2.jpg",
      name: "Emily Smith",
      role: "Marketing Manager",
    },
    {
      image: "team3.jpg",
      name: "John Doe",
      role: "Social Media Specialist",
    },
    {
      image: "team4.jpg",
      name: "Jessica Lee",
      role: "Graphic Designer",
    },
  ];
  return (
    <section id="team">
      <Title
        name={"team"}
        title={"Meet Our Team Members"}
        text={"Meet the talented individuals who make Boostify possible."}
      />
      <Container>
        <Row>
          {teamMembers.map((teamMember, index) => {
            return (
              <Col key={index} lg={3} sm={6} className="mb-4">
                <div className="team-member card-effect d-flex flex-column justify-content-between h-100">
                  <div className="text-center">
                    <img
                      src={`/images/${teamMember.image}`}
                      alt={teamMember.name}
                    />
                  </div>
                  <div className="content text-center">
                    <h4>{teamMember.name}</h4>
                    <p className="text-center">{teamMember.role}</p>
                  </div>
                  <div className="socials d-flex justify-content-center">
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
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
