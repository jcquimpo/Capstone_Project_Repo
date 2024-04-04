import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function RegisterTherapist() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [onCall, setOnCall] = useState('');
    const [resume, setResume] = useState(null);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log('Therapist Username:', username);
            console.log('Therapist Password:', password);
            console.log('Therapist Email:', email);
            console.log('Therapist Experience:', experience);
            console.log('Therapist Specialization:', specialization);
            console.log('Therapist On Call:', onCall);
            console.log('Therapist Resume:', resume);
            setPasswordMatchError(false); 
        } else {
            setPasswordMatchError(true);
        }
    };

    return (
        <div>
            <h1 className='register_therapist-heading'>Basic Login Information</h1>
            <form onSubmit={handleSubmit} className='register_therapist-form'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='username'>Username:</label>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {passwordMatchError && <p style={{ color: 'red' }}>Passwords do not match!</p>}
                
                <h3>Qualification Information</h3>
                <label htmlFor='experience'>Years of Experience:</label>
                <input type='text' id='experience' value={experience} onChange={(e) => setExperience(e.target.value)} />
                <label htmlFor='specialization'>Specialization:</label>
                <input type='text' id='specialization' value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                <p>Are you willing to be on call 24/7?</p>
                <input type='radio' id='onCallYes' name='onCall' value='Yes' onChange={(e) => setOnCall(e.target.value)} />
                <label className='form-check-label' htmlFor='onCallYes'>Yes</label>
                <input type='radio' id='onCallNo' name='onCall' value='No' onChange={(e) => setOnCall(e.target.value)} />
                <label className='form-check-label' htmlFor='onCallNo'>No</label>
                <label htmlFor='resume'>Upload Your Resume:</label>
                <input type='file' id='resume' onChange={(e) => setResume(e.target.files[0])} accept='.pdf,.doc,.docx' />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}