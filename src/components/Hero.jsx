import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile1.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE TEXT */}
          <Col md={7} className="text-white">
            <h1 className="hero-title">Hello!</h1>

            <h2 className="hero-name">
              My name is <span>Saad Mujawar</span>
            </h2>

            <h3 className="hero-role">
              and I'm a <span>Java Full Stack Developer</span>
            </h3>

            <p className="hero-desc">
              I am a Junior Java Full Stack Developer with hands-on experience
              in Java, Spring Boot, React, and Cloud technologies. I have
              completed internships in Web Development and Software & Data
              Engineering.
            </p>

            <div className="mt-4">
              <Button
                variant="outline-light"
                href="/Saad_Mujawar_Java_Full_Stack_Developer.pdf"
                className="me-3"
              >
                Resume
              </Button>

              <Button variant="outline-light" href="#projects">
                Projects
              </Button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="social-icons mt-4">
              <a href="https://github.com/MDSaad1313" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saad-mujawar-a576b3326/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:saadmujawar2667@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col md={5} className="text-center">
            <img src={profileImg} alt="Saad Mujawar" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
