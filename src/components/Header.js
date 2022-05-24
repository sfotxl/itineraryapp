import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar dark sticky="top" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar>
            <NavLink to="/">Home {' > '}</NavLink>

            <NavLink to="/London">London {"  >    "}</NavLink>

            <NavLink to="/Brussels">Brussels {" > "}</NavLink>

            <NavLink to="/Hamburg">Hamburg {" > "}</NavLink>

            <NavLink to="/Berlin">Berlin</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;