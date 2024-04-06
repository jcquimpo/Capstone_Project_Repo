import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBCardTitle,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';

const StyledMDBBtn = styled(MDBBtn)`
  /* Prevent expansion on focus and active states */
  &:focus,
  &:active {
    box-shadow: none !important;
    outline: none !important;
  }
`;

export default function Profile({ username, email }) {
  return (
    <section style={{ backgroundColor: '#fff' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage src="/images/test_card_img.jpg" alt="Profile Picture" className="rounded-circle" style={{ width: '150px' }} fluid />
                <p className="text-muted mb-1">Username: {username} Sadge</p>
                <p className="text-muted mb-4">Email: {email} PepeSadge@pain.com</p>
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-danger me-2" onClick={() => window.location.href = '/'}>Logout</button>
                  <button className="btn btn-success me-2" onClick={() => window.location.href = '/'}>Chat with EaseChat</button>
                  <button className="btn btn-success" onClick={() => window.location.href = '/MyTherapist'}>Connect with a Therapist</button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardTitle>Personal Information</MDBCardTitle>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Age:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">22</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(123) 456-7890</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Male</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBCardTitle>Medical Information</MDBCardTitle>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Diagnosis:</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Anxiety</MDBCardText>
                        <MDBCardText className="text-muted">PTSD</MDBCardText>
                        <MDBCardText className="text-muted">Depression</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Medicine: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">To Be Prescribed</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Therapy: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">General Therapy</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Therapist: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">Dr. Emily Smith, PhD</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">Medical Treatment Progress</MDBCardText>
                    <div className="text-custom mt-4 mb-1" style={{ fontSize: '.77rem', color: 'black' }}>Diagnosis & Medication</div>
                    <MDBProgress className="rounded" style={{ backgroundColor: '	#D3D3D3' }}>
                       <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor: 'green' }} />
                    </MDBProgress>

                    <div className="text-custom mt-4 mb-1" style={{ fontSize: '.77rem', color: 'black' }}>Therapy Sessions</div>
                    <MDBProgress className="rounded" style={{ backgroundColor: '	#D3D3D3' }}>
                       <MDBProgressBar width={72} valuemin={0} valuemax={100} style={{ backgroundColor: 'green' }} />
                    </MDBProgress>

                    <div className="text-custom mt-4 mb-1" style={{ fontSize: '.77rem', color: 'black' }}>Progress Evaluation</div>
                    <MDBProgress className="rounded" style={{ backgroundColor: '	#D3D3D3' }}>
                       <MDBProgressBar width={89} valuemin={0} valuemax={100} style={{ backgroundColor: 'green' }} />
                    </MDBProgress>

                    <div className="text-custom mt-4 mb-1" style={{ fontSize: '.77rem', color: 'black' }}>Overall Mental Well-being</div>
                    <MDBProgress className="rounded" style={{ backgroundColor: '	#D3D3D3' }}>
                      <MDBProgressBar width={75} valuemin={0} valuemax={100} style={{ backgroundColor: 'green' }} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
