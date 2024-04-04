import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection'

// TODO: fix styling for the home page

function Home() {
    return (
        <div>
            <HeroSection />
            <div class="container">
                <div class="text-center">
                    <h1>Welcome to MindEase</h1>
                    <p>Welcome to the Home Page!</p>
                    <p>Feel free to talk to us!</p>
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
                        <ol style={{whiteSpace: 'nowrap'}}>
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
            <Cards />
            <div class="container">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-sm-6">
                        <div class="text-center">
                            <h2 style={{ whiteSpace: 'nowrap' }}>Why MindEase?</h2>
                            <p>MindEase offers a revolutionary approach to mental health support:</p>
                        </div>
                        <ul style={{ whiteSpace: 'nowrap' }}>
                            <li>
                                <strong>Accessible:</strong> Get support anytime, anywhere, with our user-friendly platform.
                            </li>
                            <li>
                                <strong>Personalized:</strong> Experience personalized guidance and evidence-based interventions tailored to your needs.
                            </li>
                            <li>
                                <strong>Inclusive:</strong> Break down barriers to mental health care and foster a supportive community.
                            </li>
                            <li>
                                <strong>Empowering:</strong> Take control of your mental well-being and build resilience for life's challenges.
                            </li>
                            <li>
                                <strong>Innovative:</strong> Leverage the power of AI to revolutionize mental health support and lead a fulfilling life.
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-3"></div>
                </div>
            </div>
            <div class="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>MindEase</th>
                            <th>In-person</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A therapist licensed in your state</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Receive therapy from anywhere</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Message your therapist any time</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Receive messages back</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Easy appointment scheduling</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>Quickly switch therapists</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>No parking fees or lost travel time</td>
                            <td>
                                <i class="fa fa-check text-success"></i>
                            </td>
                            <td>
                                <i class="fa fa-times text-danger"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="about-us-section"></div>

            <br></br>
            <br></br>

            <div class="container">
                <div class="text-center">
                    <h2>About Us</h2>
                </div>
                <p>Welcome to Mindease, an innovative AI therapy company dedicated to supporting mental wellness and guiding individuals on their journey to emotional well-being.
                    At Mindease, we believe that everyone deserves access to effective and personalized mental health support, anytime and anywhere.
                    Our AI software therapy company is designed to provide transformative experiences through cutting-edge technology and compassionate guidance.</p>

                <br></br>

                <div class="text-center">
                    <h2>What We Do</h2>
                </div>
                <p>Mindease specializes in developing AI-powered therapy software that combines the power of artificial intelligence with evidence-based therapeutic techniques.
                    Our software offers a range of mental health resources, tools, and guidance to help individuals navigate their emotional challenges, promote self-care, and foster personal growth.
                    Our AI therapy solutions are designed to complement traditional therapy, providing additional support and guidance to individuals seeking mental wellness.</p>

                <br></br>

                <div class="text-center">
                    <h2>Our Approach</h2>
                </div>
                <p>At Mindease, we prioritize the needs and well-being of our users. Our AI software therapy is built on a foundation of empathy, compassion, and respect for individual experiences.
                    We understand that mental health journeys are unique, and our goal is to provide personalized support that meets the diverse needs of our users.
                    Our AI algorithms are continually learning and adapting, allowing us to provide tailored recommendations and guidance that align with each individual's goals and preferences.
                    Through our software, users can access a variety of therapeutic techniques, such as cognitive-behavioral therapy, mindfulness practices, and positive psychology interventions, to address their specific challenges and promote lasting change.</p>

                <br></br>

                <div class="text-center">
                    <h2>Our Main Goal</h2>
                </div>
                <p>The main goal of Mindease's AI software therapy company is to make mental health support accessible, effective, and inclusive. We strive to break down barriers to mental health care by providing a user-friendly platform that can be accessed anytime, anywhere.
                    Our goal is to empower individuals to take control of their mental well-being and navigate life's challenges with resilience, self-compassion, and personal growth.
                    We aim to revolutionize the mental health landscape by leveraging the power of AI to deliver personalized guidance, evidence-based interventions, and a supportive community.
                    Through our AI software, we want to enable individuals to build resilience, cultivate emotional well-being, and lead fulfilling lives. Join us on this transformative journey as we harness the potential of AI to revolutionize mental health support.
                    At Mindease, we are committed to helping individuals thrive, one step at a time.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Home;