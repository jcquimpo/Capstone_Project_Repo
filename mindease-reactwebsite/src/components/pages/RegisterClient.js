import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

export default function RegisterClient() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        if (password === confirmPassword) {
            try {
                const response = await fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, username, password }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Registration Successful:', data);
                    setRegistrationSuccess(true);

                    navigate('/login');
                } else {
                    console.error('Registration Failed:', response.statusText);
                }
            } catch (error) {
                console.error('Registration Error:', error);
            }
        } else {
            setPasswordMatchError(true);
        }
    };

    return (
        <div>
            <h1 className='register_client-heading'>Register Client</h1>
            <form onSubmit={handleSubmit} className='register_client-form'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {passwordMatchError && <p style={{ color: 'red' }}>Passwords do not match!</p>}
                <button type='submit'>Register</button>
            </form>
            {registrationSuccess && (
                <>
                    <p style={{ color: 'green' }}>Registration Successful!</p>
                    {window.location.href = '/login'}
                </>
            )}
        </div>
    );
}
