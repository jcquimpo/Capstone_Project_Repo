import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function RegisterClient() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log('Client Username:', username);
            console.log('Client Password:', password);
            console.log('Client Email:', email);
            setPasswordMatchError(false); 
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