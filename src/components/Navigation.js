import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("hero");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveLink("hero");
      } else {
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const scrollY = window.pageYOffset;
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          const sectionID = section.getAttribute("id");
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveLink(sectionID);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeLink]);

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    const scrollY = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  };
  return (
    <Navbar expand="lg" sticky="top" className="bg-white  shadow">
      <Container>
        <Navbar.Brand href="#home">BOOST-IFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => scrollToSection("hero")}
              className={activeLink === "hero" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("services")}
              className={activeLink === "services" ? "active" : ""}
            >
              Services
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("features")}
              className={activeLink === "features" ? "active" : ""}
            >
              Features
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("pricing")}
              className={activeLink === "pricing" ? "active" : ""}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("team")}
              className={activeLink === "team" ? "active" : ""}
            >
              Team
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("blog")}
              className={activeLink === "blog" ? "active" : ""}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
