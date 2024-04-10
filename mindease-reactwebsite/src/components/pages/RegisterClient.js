import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function RegisterClient() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === confirmPassword) {
    //         console.log('Client Username:', username);
    //         console.log('Client Password:', password);
    //         console.log('Client Email:', email);
    //         setPasswordMatchError(false); 
    //     } else {
    //         setPasswordMatchError(true);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Login Successful:', data);
                    setLoginError('');
                } else {
                    setLoginError('Invalid username or password');
                }
            } catch (error) {
                console.error('Login Error:', error);
                setLoginError('An error occurred during login');
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
        </div>
    )
}