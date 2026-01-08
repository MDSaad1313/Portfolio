import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function MyNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand">
          SM.
        </Navbar.Brand>
        ...
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center links */}
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#tools">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
