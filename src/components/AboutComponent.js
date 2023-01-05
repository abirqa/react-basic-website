import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../App.css";

const AboutComponent = () => {
  return (
    <MDBContainer className="abt-main-container" style={{ marginTop: 80 }}>
      <MDBRow>
        <MDBCol>
          <small className="abt-smalltext text-uppercase">About us</small>
          <h1 className="h2 mb-4" style={{ fontWeight: 600, marginTop: 10 }}>
            <span className="abt-main-heading-span">About Our</span>
            <span className="abt-heading-span">Company</span>
          </h1>
          <p className="text-secondary abt-para" style={{ lineHeight: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
            Distinctio voluptatibus dolor quaerat quo omnis illo sequi at velit,
            odit quod!<br></br>
            <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit repellat iure laboriosam cum voluptatum, nam minima
            deserunt aut? Distinctio voluptatibus dolor quaerat quo omnis illo
            sequi at velit, odit quod!
          </p>
          <a
            href="#"
            className="btn px-4 py-3 mt-4 text-white d-flex align-items-center justify-content-between abt-btn"
          >
            <span>Our Services</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </MDBCol>
        <MDBCol size="6">
          <MDBRow>
            <MDBCol size="6" className="abtimgdiv">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="rounded abt-img"
                alt=""
              ></img>
            </MDBCol>
            <MDBCol size="6">
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="rounded abt-img-2"
                alt=""
              ></img>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutComponent;
