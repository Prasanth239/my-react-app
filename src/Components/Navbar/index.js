import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  NavbarText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

const Navb = () => {
  return (
    <>
      <div>
        <Nav
        color="info"
        justified
        tabs
       fill
        
        
        >
          <NavItem>
            <NavLink active href="home">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="about">
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="step">
              Step Counter
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="bill">
              Split Bill Calculator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="team">
              My Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="travel">
              Travel Cards
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="meme">
              Meme Generator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="sign-up">
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="signin">
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
};

export default Navb;
