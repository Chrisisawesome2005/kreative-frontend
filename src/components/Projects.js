import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Title from "./Title";

const Projects = () => {
  const projects = [
    {
      image: "pro1.jpg",
      name: "Project 1",
      title: "Boostify Website Redesign",
    },
    {
      image: "pro2.jpg",
      name: "Project 2",
      title: "Social Media Advertising Campaign",
    },
    {
      image: "pro3.jpg",
      name: "Project 3",
      title: "E-commerce Website Development",
    },
    {
      image: "pro4.jpg",
      name: "Project 4",
      title: "Content Creation and Marketing",
    },
    {
      image: "pro5.jpg",
      name: "Project 5",
      title: "Search Engine Optimization (SEO) Strategy",
    },
    {
      image: "pro6.jpg",
      name: "Project 6",
      title: "Brand Identity and Logo Design",
    },
  ];
  return (
    <section id="projects">
      <Title
        name={"projects"}
        title={"Our Latest Work"}
        text={
          "Explore our recent projects showcasing the diverse range of services offered by Boostify."
        }
      />
      <Container>
        <Row>
          {projects.map((project, index) => {
            return (
              <Col key={index} lg={4} sm={2}>
                <div className="project image-zoom">
                  <div className="image-zoom-wrapper">
                    <Image fluid src={`/images/${project.image}`} />
                    <div className="project-content">
                      <h4 className="text-white">{project.name}</h4>
                      <p className="text-white">{project.title}</p>
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

export default Projects;
