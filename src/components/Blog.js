import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import Title from "./Title";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of UI: Trends Shaping Web Design in 2024",
      description:
        "Discover the hottest UI trends revolutionizing website experiences – from immersive 3D to AI-powered personalization, get ready for the future!",
      img: "/images/blog1.jpg",
      content:
        "The world of web design is constantly evolving, and 2024 promises to bring major shifts. Explore trends like 3D elements, AI-generated layouts, and more...",
    },
    {
      title: "Mastering CSS: Tips for Cleaner, More Maintainable Stylesheets",
      description:
        "Level up your CSS game with these strategies for writing organized, scalable, and efficient stylesheets that will make your development life easier.",
      img: "/images/blog2.jpg",
      content:
        "Struggling with tangled CSS? Learn techniques like BEM, preprocessors, and design systems to streamline your styling and create beautiful websites.",
    },
    {
      title: "Boosting UX: Why User-Focused Design Always Wins",
      description:
        "Understand the power of putting users at the heart of your design process – learn how to improve website conversions and user satisfaction.",
      img: "/images/blog3.jpg",
      content:
        "A user-friendly website is a successful website. Dive into user research, accessibility, and iterative design to create experiences people love.",
    },
  ];

  return (
    <section id="blog">
      <Title
        name={"blog"}
        title={"News From The Blog"}
        text={
          "Stay up-to-date with the latest insights, trends, and best practices in web development and design!"
        }
      />
      <Container>
        <Row>
          {blogPosts.map((post, index) => (
            <Col className="blog card-effect" lg={4} key={index}>
              <img src={post.img} />
              <h4>
                <a href="#">{post.title}</a>
              </h4>
              <p>{post.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
