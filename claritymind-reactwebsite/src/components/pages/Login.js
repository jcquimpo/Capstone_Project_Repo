import React, { useState, useEffect } from 'react';
import '../../App.css';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Login Function - should redirect to the profile
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div>
            <h1 className='login-heading'>LOGIN</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}