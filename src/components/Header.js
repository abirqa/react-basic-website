import React, { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar className="main-navbar" expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarToggler
          onClick={() => setShowBasic(!showBasic)}
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MDBIcon fas icon="bars" />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right className="mb-2 mb-lg-0">
            <MDBNavbarItem active>
              <MDBNavbarLink aria-current="page" href={"/"}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/about"}>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/services"}>Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/gallery"}>Gallery</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href={"/contact"}>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
