import React from 'react';
import './styles/TherapistCards.css';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function TherapistCard({ name, role, email, phone, description, pfp, therapistID }) {

  return (
    <MDBCard className="mb-3" style={{ borderRadius: '.75rem', width: '600px' }}>
      <MDBCardBody className="d-flex align-items-center">
        <div style={{ maxWidth: '150px', marginRight: '20px' }}>
          <MDBCardImage
            src={pfp}
            alt="profile pic"
            className="my-5"
            fluid
          />
          <MDBTypography tag="h5" className="fs-3">{name}</MDBTypography>
          <MDBCardText className="fs-5">{role}</MDBCardText>
        </div>
        <div className="flex-grow-1">
          <MDBTypography tag="h6" className="fw-bold mt-4">Information</MDBTypography>
          <hr className="mt-0 mb-3" />
          <MDBCardText className="text-muted fs-6 mb-1">Email: {email}</MDBCardText>
          <MDBCardText className="text-muted fs-6">Phone: {phone}</MDBCardText>
          <MDBTypography tag="h6" className="fw-bold">Profile Description</MDBTypography>
          <p className="text-muted">
            {description}
          </p>
          <Link to={`/SchedulePage?therapistID=${therapistID}`} className='btn btn-primary'>
            Schedule Meeting
          </Link>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

