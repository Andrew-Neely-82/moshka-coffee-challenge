import { NavbarLeft, NavbarMiddle, NavbarRight } from "./import";
import { Navbar as NavbarContainer } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./style.scss";

const Navbar = () => {
  return (
    <NavbarContainer expand="lg" className="Navbar__ bg-body-tertiary navbar-dark ">
      <Container>
        <NavbarLeft />
        <NavbarContainer.Brand>
          <NavbarMiddle />
        </NavbarContainer.Brand>
        <NavbarRight />
        {/*  */}
        <NavbarContainer.Toggle aria-controls="basic-navbar-nav" />
        {/* mobile drop down */}
        <NavbarContainer.Collapse id="basic-navbar-nav" className="hidden">
          <Nav className={`me-auto hidden`}>
            <NavbarLeft />
            <NavbarRight />
          </Nav>
        </NavbarContainer.Collapse>
      </Container>
    </NavbarContainer>
  );
};
export default Navbar;
