import React from "react";
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

function slider() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/slides/041.webp')",
        height: "400px",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3 slider-main-text">
              Welcome to Single Page React Website !!!
            </h1>
            <h4 className="mb-3 slider-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h4>
            <MDBBtn size="lg" className="me-2 slider-main-button" active>
              Get Started
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slider;
