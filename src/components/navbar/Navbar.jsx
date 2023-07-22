import { NavbarLeft, NavbarMiddle, NavbarRight, NavbarCollapse } from "./import";
import { Navbar as NavbarContainer } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./style.scss";

const Navbar = () => {
  return (
    <NavbarContainer expand="lg" className="Navbar__ bg-body-tertiary navbar-dark">
      <Container>
        <NavbarLeft />
        <NavbarContainer.Brand>
          <NavbarMiddle />
        </NavbarContainer.Brand>
        <NavbarRight />
        <NavbarContainer.Toggle aria-controls="basic-navbar-nav" />
        {/* mobile drop down */}
        <NavbarCollapse />
      </Container>
    </NavbarContainer>
  );
};
export default Navbar;

