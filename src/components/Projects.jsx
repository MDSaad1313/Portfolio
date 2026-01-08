import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Projects</h2>

        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Hospital Management System</Card.Title>
                <Card.Text>
                  Java, Spring Boot, Hibernate, Angular, MySQL
                </Card.Text>
                <Button variant="dark">View Code</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>React, Vite, Bootstrap</Card.Text>
                <Button variant="dark">Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
