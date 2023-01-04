import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Logo from "./Logo";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar className="main-navbar" expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <Logo />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic} className="mobile-ul-nav">
          <MDBNavbarNav right className="mb-2 mb-lg-0 navul">
            <MDBNavbarItem active>
              <MDBNavbarLink
                aria-current="page"
                href={"/"}
                className="menu-link"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/about"} className="menu-link">
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/services"} className="menu-link">
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/gallery"} className="menu-link">
                Gallery
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/contact"} className="menu-link">
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
