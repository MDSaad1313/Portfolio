import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  return (
    <section id="skills" className="py-5 text-white">
      <Container>
        <h2 className="text-center fw-bold mb-4">Skills</h2>

        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Frontend</Card.Title>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Backend</Card.Title>
                <ul>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Hibernate</li>
                  <li>MySQL</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Cloud & Tools</Card.Title>
                <ul>
                  <li>GCP</li>
                  <li>Docker</li>
                  <li>Git & GitHub</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
