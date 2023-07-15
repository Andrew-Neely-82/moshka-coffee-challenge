import { NavbarLeft, NavbarMiddle, NavbarRight } from "./import";
import './style.scss'

const Navbar = () => {
  return (
    <div className="Navbar__">
      <NavbarLeft />
      <NavbarMiddle />
      <NavbarRight />
    </div>
  );
};
export default Navbar;
