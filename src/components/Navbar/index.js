import React from "react";
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./NavbarEle";

const Navabr = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Yolo</NavLogo>
          <MobileIcon>
              <FaBars />
          </MobileIcon>
          <NavMenu>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='discover'>Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='services'>Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='signup'>Sign Up</NavLinks>
                </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/signin'>
                Sign In
              </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navabr;
