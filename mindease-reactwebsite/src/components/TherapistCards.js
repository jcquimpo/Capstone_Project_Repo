import React from 'react';
import CardItem from './CardItem';
import './styles/TherapistCards.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function TherapistCards() {
  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="8" className="mb-4 mb-lg-0">
          <MDBCard className="mb-3" style={{ borderRadius: '.75rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="4" className="gradient-custom text-center text-white"
                style={{ borderTopLeftRadius: '.75rem', borderBottomLeftRadius: '.75rem', padding: '2rem' }}>
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" className="my-5" style={{ width: '150px' }} fluid />
                <MDBTypography tag="h5" className="fs-3">Marie Horwitz</MDBTypography>
                <MDBCardText className="fs-5">Web Designer</MDBCardText>
                <MDBIcon far icon="edit mb-5" size="lg" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6" className="fs-4">Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6" className="fs-5">Email</MDBTypography>
                      <MDBCardText className="text-muted fs-6">info@example.com</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6" className="fs-5">Phone</MDBTypography>
                      <MDBCardText className="text-muted fs-6">123 456 789</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <MDBTypography tag="h6" className="fs-4">Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6" className="fs-5">Email</MDBTypography>
                      <MDBCardText className="text-muted fs-6">info@example.com</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6" className="fs-5">Phone</MDBTypography>
                      <MDBCardText className="text-muted fs-6">123 456 789</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <div className="d-flex justify-content-start">
                    <a href="#!" className="fs-2 me-3"><MDBIcon fab icon="facebook" size="2x" /></a>
                    <a href="#!" className="fs-2 me-3"><MDBIcon fab icon="twitter" size="2x" /></a>
                    <a href="#!" className="fs-2 me-3"><MDBIcon fab icon="instagram" size="2x" /></a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

