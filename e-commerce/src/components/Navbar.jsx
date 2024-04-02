import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarBootstrap>
      <Container>
        <NavbarBootstrap.Brand to="/" as={NavLink}>
          <img
            className="logoDD"
            src="./src/assets/logo-dd.png"
            alt="logo D&D"
          />
        </NavbarBootstrap.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/Dados" as={NavLink}>
            Dados
          </Nav.Link>
          <Nav.Link to="/category/Figuras" as={NavLink}>
            Figuras
          </Nav.Link>
          <Nav.Link to="/category/Accesorios" as={NavLink}>
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </NavbarBootstrap>
  );
};
