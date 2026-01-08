import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <Container className="text-center">
        © {new Date().getFullYear()} Saad Mujawar
      </Container>
    </footer>
  );
}

export default Footer;
