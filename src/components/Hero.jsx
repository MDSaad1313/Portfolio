import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section id="home" className="vh-100 d-flex align-items-center bg-light">
      <Container className="text-center">
        <h1 className="fw-bold">Hi, I'm Saad Mujawar</h1>
        <p className="lead">
          Junior Java Full Stack Developer | Cloud & DevOps Enthusiast
        </p>

        <Button
          variant="dark"
          className="me-2"
          href="https://github.com/MDSaad1313"
          target="_blank"
        >
          GitHub
        </Button>

        <Button
          variant="outline-dark"
          href="https://www.linkedin.com/in/saad-mujawar-a576b3326/"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
