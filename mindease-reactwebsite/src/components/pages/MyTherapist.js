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
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="text-center">
                            <h2 style={{ whiteSpace: 'nowrap' }}>How does MindEase work?</h2>
                            <p>Welcome to MindEase, your personalized AI therapy companion!</p>
                        </div>
                        <ol style={{ whiteSpace: 'nowrap' }}>
                            <li>Sign up or log in to your MindEase account.</li>
                            <li>Take the initial assessment to personalize your therapy journey.</li>
                            <li>Explore various therapy modules based on your needs.</li>
                            <li>Engage with our AI-powered chatbot for real-time support and guidance.</li>
                            <li>Access resources like guided meditations, journaling prompts, and relaxation exercises.</li>
                        </ol>

                        <div class="text-center">
                            <p>Start your journey to mental wellness with MindEase today!</p>
                            <a class="btn btn-success btn-lg rounded" href="/get-started">Get Started</a>
                        </div>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            <TherapistCards/>
            <Cards/>

            <Footer />
        </div>
    );
}