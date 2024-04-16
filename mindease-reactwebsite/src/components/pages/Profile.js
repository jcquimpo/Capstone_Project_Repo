import React, { useState } from 'react';
import '../../App.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBProgress,
  MDBProgressBar
} from 'mdb-react-ui-kit';

export default function Profile({ username, email, name, age, mobile_num, gender, location, diagnosis, medicine, therapy_type, therapist }) {
  
  const redirectToStreamlit = () => {
    window.location.href = 'http://localhost:8501/'; // Replace with your Streamlit app URL
  };

  return (
    <section style={{ backgroundColor: '#fff' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage src="/images/test_card_img.jpg" alt="Profile Picture" className="rounded-circle" style={{ width: '150px' }} fluid />
                <p className="text-muted mb-1">Username: {username} almostOK</p>
                <p className="text-muted mb-4">Email: {email} almostOK@mail.com</p>
                <div className="d-flex justify-content-center mb-2">
                  <button className="btn btn-danger me-2" onClick={() => window.location.href = '/'}>Logout</button>
                  {/* <button className="btn btn-success me-2" onClick={() => window.location.href = '/ChatbotPage'}>Chat with EaseChat</button> */}

                  <button className="btn btn-success me-2" onClick={redirectToStreamlit}>Go to Streamlit App</button>

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
                    <MDBCardText className="text-muted">{name} John Doe</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Age:</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{age} 22</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{mobile_num} (123) 456-7890</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{gender} Male</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Location</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{location} Bay Area, San Francisco, CA</MDBCardText>
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
                        <MDBCardText className="text-muted">{diagnosis} Anxiety</MDBCardText>
                        <MDBCardText className="text-muted">{diagnosis} PTSD</MDBCardText>
                        <MDBCardText className="text-muted">{diagnosis} Depression</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Medicine: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{medicine} To Be Prescribed</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Therapy: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{therapy_type} General Therapy</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Therapist: </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">{therapist} Dr. Emily Smith, PhD</MDBCardText>
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
