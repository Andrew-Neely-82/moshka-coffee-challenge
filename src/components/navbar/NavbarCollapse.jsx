import { Navbar as NavbarContainer } from "react-bootstrap";
import { NavbarLeft, NavbarRight } from "./import";
import Nav from "react-bootstrap/Nav";

const NavbarCollapse = () => {
  return (
    <NavbarContainer.Collapse id="basic-navbar-nav" className="hidden">
      <Nav className="me-auto hidden">
        <NavbarLeft />
        <NavbarRight />
      </Nav>
    </NavbarContainer.Collapse>
  );
};
export default NavbarCollapse;
