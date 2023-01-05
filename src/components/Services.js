import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
} from "mdb-react-ui-kit";

const Services = () => {
  return (
    <MDBContainer fluid className="services-main-container">
      <MDBContainer fluid className="services-heading">
        <small className="abt-smalltext text-uppercase">Our Services</small>
        <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>
          <span className="abt-main-heading-span services-main-heading">
            Services we are
          </span>
          <span className="abt-heading-span">Specialize in</span>
        </h1>
      </MDBContainer>
      <MDBRow className="row-cols-1 row-cols-md-4 g-4">
        <MDBCol className="services-column">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="service-box-title">
                Services 1
              </MDBCardTitle>
              <MDBCardText className="service-box-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBBtn className="service-btn" href="javascript:void(0)">
                Read More
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="services-column">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="service-box-title">
                Services 2
              </MDBCardTitle>
              <MDBCardText className="service-box-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBBtn className="service-btn" href="javascript:void(0)">
                Read More
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="services-column">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/043.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="service-box-title">
                Services 3
              </MDBCardTitle>
              <MDBCardText className="service-box-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBBtn className="service-btn" href="javascript:void(0)">
                Read More
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="services-column">
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="service-box-title">
                Services 4
              </MDBCardTitle>
              <MDBCardText className="service-box-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBBtn className="service-btn" href="javascript:void(0)">
                Read More
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Services;
