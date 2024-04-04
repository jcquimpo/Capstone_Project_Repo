import React from 'react';
import '../../App.css';

export default function Profile() {
    return <h1 className='profile'>PROFILE</h1>
}

<div class="container">
      <br></br>
      <div class="welcome-container">
        <h2 class="welcome-message text-success">Welcome!</h2>
        <p class="username">Hello, {{ username }}</p>
    </div>
      <button class="btn btn-danger" onclick="window.location.href='/logout'">Logout</button>
    </div>

    <div class="container profile-container">
      <div class="row">
        <div class="col-md-3">
          <div class="profile-header">
            <div class="profile-picture">
              <img src="{{ url_for('static', filename = 'images/default_pfp.jpg') }}" alt="Profile Picture" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="profile-section">
            <div class="profile-name">
              <h2>{{ username }}</h2>
            </div>
            <h3>Personal Information</h3>
            <p>Age:</p>
            <p>Location:</p>
            <p>Medical Information:</p>
            <div class="profile-email">{{ email }}</div>
          </div>
          <div class="profile-section">
            <h3>Contact Details</h3>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main St, New York</p>
          </div>
          <a class="btn btn-success btn-sm rounded" href="#">Chat with EaseChat</a>
          <a class="btn btn-success btn-sm rounded" href="#">Connect With a Therapist</a>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="chatbot-container" id="chatbotContainer">
            <div class="chatbot-header" onclick="toggleChatbot()">EaseChat</div>
            <div id="chatbotContent" class="collapse">
                <div class="chatbot-window">
                    <div>{{ username }}: Hello, EaseChat!</div>
                    <div>EaseChat: Hi there! How can I assist you?</div>
                </div>
                <input type="text" class="chatbot-input" placeholder="Type your message..." />
                <button class="btn btn-primary send-button" onclick="sendMessage()">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>


