import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import TherapistCards from '../TherapistCards';
import Cards from '../Cards';

export default function MyTherapist() {
    return (
        <div>
            <div class="container">
                <div class="text-center">
                    <h1>Connect with a Real Therapist!</h1>
                    <p>Schedule a Meeting TODAY!</p>
                </div>
            </div>
            <div class="container">
                <TherapistCards />
                <TherapistCards />
                <TherapistCards />
            </div>
            <Cards />
            <Footer />
        </div>
    );
}