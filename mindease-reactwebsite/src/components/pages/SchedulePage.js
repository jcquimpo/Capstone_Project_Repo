import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter
} from 'mdb-react-ui-kit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function SchedulePage() {
    const { therapistID, name, email } = useParams();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSchedule = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <div className="container">
                <div className="text-center">
                    <h1>Connect with a Real Therapist!</h1>
                    <p>Schedule a Meeting TODAY!</p>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center gap-3">
                <MDBContainer>
                    <MDBRow className="justify-content-center mt-5">
                        <MDBCol md="6" className="text-center">
                            <h1>Schedule Your Appointment</h1>
                            <Calendar onChange={handleDateChange} value={selectedDate} />
                            <MDBBtn onClick={handleSchedule} className="mt-3">Schedule</MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <MDBModal show={modalOpen} onHide={() => setModalOpen(false)}>
                        <MDBModalHeader>Confirm Appointment</MDBModalHeader>
                        <MDBModalBody>
                            <p>You have selected {selectedDate.toDateString()} for your appointment.</p>
                            <p>Would you like to confirm this appointment?</p>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={() => setModalOpen(false)}>Cancel</MDBBtn>
                            <MDBBtn color="primary" onClick={() => alert('Appointment confirmed!')}>Confirm</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
            </div>
            {therapistID && (
                <div className="container">
                    <h2>Selected Therapist</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <h5 className="card-text">Email: {email}</h5>
                            <h5 className='card-text'>Therapist ID: {therapistID}</h5>
                            <button className="btn btn-primary" onClick={handleSchedule}>
                                Schedule Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
