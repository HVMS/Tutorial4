import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
    
        // Hit the API with login credentials
        try{
            const response = await fetch('https://express-t4.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            });
        
            if (response.ok) {
            // If login is successful, navigate to profile listing page
            navigate('/users');
            } else {
            // Handle login error
            console.log('Login failed');
            }
        }catch(error){
            console.log("Login Failed", error);
        }
      };
    
      return (
        <div className="login-page">
            <div className="login-card">
                <h1>Login Page</h1>
                <form onSubmit={handleLogin}>
                    <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
          
        </div>
      );

}

export default LoginPage;