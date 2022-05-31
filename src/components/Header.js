import { Navbar, Nav, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
      <Navbar dark sticky="top" expand="md">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar className="flex-grow-1 justify-content-evenly">
            <NavLink to="/">Home {" > "}</NavLink>

            <NavLink to="/London">London {"  >    "}</NavLink>

            <NavLink to="/Brussels">Brussels {" > "}</NavLink>

            <NavLink to="/Hamburg">Hamburg {" > "}</NavLink>

            <NavLink to="/Berlin">{' '}Berlin {" > "}</NavLink>
<hr/>

           <UncontrolledDropdown size="small" nav inNavbar>
              <DropdownToggle nav caret color="primary" className="text-primary">
                By Day
              </DropdownToggle>
              <DropdownMenu>
              
                <Link to="/11"><DropdownItem>Saturday, June 11</DropdownItem></Link>
                <Link to="/12"><DropdownItem>Sunday, June 12</DropdownItem></Link>
                <Link to="/13"><DropdownItem>Monday, June 13</DropdownItem></Link>
                <Link to="/14"><DropdownItem>Tuesday, June 14</DropdownItem></Link>
                <Link to="/15"><DropdownItem>Wednesday, June 15</DropdownItem></Link>
                <Link to="/16"><DropdownItem>Thursday, June 16</DropdownItem></Link>
                <Link to="/17"><DropdownItem>Friday, June 17</DropdownItem></Link>
                <Link to="/18"><DropdownItem>Saturday, June 18</DropdownItem></Link>
                <Link to="/19"><DropdownItem>Sunday, June 19</DropdownItem></Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            {/* <UncontrolledDropdown size="small" nav inNavbar>
              <DropdownToggle nav caret color="primary">
                By Day
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>June</DropdownItem>
                <DropdownItem>11</DropdownItem>
                <DropdownItem>12</DropdownItem>
                <DropdownItem>13</DropdownItem>
                <DropdownItem>14</DropdownItem>
                <DropdownItem>15</DropdownItem>
                <DropdownItem>16</DropdownItem>
                <DropdownItem>17</DropdownItem>
                <DropdownItem>18</DropdownItem>
                <DropdownItem>19</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            
          </Nav>
        </Collapse>
      </Navbar>
    
  );
};

export default Header;
