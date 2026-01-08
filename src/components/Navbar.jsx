import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Saad Mujawar</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            <Nav.Link href="https://github.com/MDSaad1313" target="_blank">
              <FaGithub />
            </Nav.Link>

            <Nav.Link
              href="https://www.linkedin.com/in/saad-mujawar-a576b3326/"
              target="_blank"
            >
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
