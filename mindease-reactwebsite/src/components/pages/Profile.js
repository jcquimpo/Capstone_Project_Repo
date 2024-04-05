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
      {/* <button className="btn btn-danger" onClick={() => window.location.href = '/logout'}> */}
      <button className="btn btn-danger" onClick={() => window.location.href = '/'}>
        Logout
      </button>

      <div className="container profile-container">
        <div className="row">
          <div className="col-md-3">
            <div className="profile-header">
              <div className="profile-picture">
                <img
                  src="/images/test_card_img.jpg"
                  alt="Profile Picture"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="profile-section">
              <div className="profile-name">
                <h2>{username}</h2>
              </div>
              <h3>Personal Information</h3>
              <p>Age:</p>
              <p>Location:</p>
              <p>Medical Information:</p>
              <div className="profile-email">{email}</div>
            </div>
            <div className="profile-section">
              <h3>Contact Details</h3>
              <p>Phone: +1234567890</p>
              <p>Address: 123 Main St, New York</p>
            </div>
            <a className="btn btn-success btn-sm rounded" href="#">
              Chat with EaseChat
            </a>
            <a className="btn btn-success btn-sm rounded" href="#">
              Connect With a Therapist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
