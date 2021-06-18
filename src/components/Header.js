import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  let history = useHistory();

  const handleCL = () => {
    setCollapsed(!collapsed);
    history.push("/contactlist");
  };
  const handleAC = () => {
    setCollapsed(!collapsed);
    history.push("/addcontact");
  };

  return (
    <>
      <Navbar color="faded" light>
        <NavbarBrand className="mr-auto" onClick={() => history.push("/")}>
          Your Contacts
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setCollapsed(!collapsed)}
          className="mr-2"
        />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink onClick={handleAC}>Add Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleCL}>Contact List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
