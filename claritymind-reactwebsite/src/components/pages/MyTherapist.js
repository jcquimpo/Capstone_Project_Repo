import React from 'react';
import Footer from '../Footer';
import '../../App.css';
import TherapistCards from '../TherapistCards';

export default function MyTherapist() {
    return (
        <div>
            <div class="container">
                <div class="text-center">
                    <h1>Connect with a Real Therapist!</h1>
                    <p>Schedule a Meeting TODAY!</p>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center gap-3">
                <TherapistCards
                    name="Emily Williams"
                    role="Psychiatrist"
                    email="EWilliams@mail.com"
                    phone="123 456 789"
                    pfp="images/default_pfp.jpg"
                    description="A highly experienced psychiatrist specializing in various mental health disorders. 
                    With a compassionate approach and deep expertise in medication management and therapy, she provides comprehensive care to her patients."
                    therapistID={1357}
                />
                <TherapistCards
                    name="John Doe"
                    role="Therapist"
                    email="JDoe@mail.com"
                    phone="987 654 321"
                    pfp="images/default_pfp.jpg"
                    description="A dedicated therapist with a focus on cognitive-behavioral therapy (CBT) and mindfulness-based approaches. 
                    He helps clients navigate life challenges, manage stress, and improve overall mental well-being through evidence-based interventions."
                    therapistID={2468}
                />
                <TherapistCards
                    name="Jordan Smith"
                    role="Therapist"
                    email="JSmith@mail.com"
                    phone="123 456 789"
                    pfp="images/default_pfp.jpg"
                    description="a licensed therapist known for his empathetic and client-centered approach. 
                    With a background in trauma-informed care and interpersonal therapy, he assists individuals in exploring their emotions, building resilience, and fostering healthy relationships."
                    therapistID={3691}
                />
            </div>
            <Footer />
        </div>
    );
}