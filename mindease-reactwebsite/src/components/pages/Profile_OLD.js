import React from 'react';
import '../../App.css';

export default function Profile({ username, email }) {
  return (
    <div className="container">
      <br />
      <div className="welcome-container">
        <h2 className="welcome-message text-success">Welcome!</h2>
        <p className="username">Hello, {username}</p>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="profile-header">
            <div className="profile-picture">
              <img src="/images/test_card_img.jpg" alt="Profile Picture" className="img-fluid" />
              <div className="profile-name">
                <h3 className="username">Username: {username}</h3>
              </div>
              <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-danger" onClick={() => window.location.href = '/'}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="profile-description">
            <p>This is your profile description. You can add any additional information about yourself here.</p>
          </div>

          <div className="profile-section-wrapper">
            <div className="profile-section">
              <h3>Personal Information</h3>
              <p>Age:</p>
              <p>Location:</p>
              <p>Medical Information:</p>
              <div className="profile-email">Email: {email}</div>
            </div>
          </div>

          <div className="profile-section-wrapper">
            <div className="profile-section">
              <h3>Contact Details</h3>
              <p>Phone: +1234567890</p>
              <p>Address: 123 Main St, New York</p>
            </div>
            <a className="btn btn-success btn-sm rounded" href="/">
              Chat with EaseChat
            </a>
            <a className="btn btn-success btn-sm rounded" href="MyTherapist">
              Connect With a Therapist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
