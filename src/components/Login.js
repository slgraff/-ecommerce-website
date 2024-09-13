import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../assests/Login.css'; // Import the CSS file for styling
import { Eye, EyeOff } from 'react-feather'; // Import Feather icons

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple authentication check
    if (username === 'admin' && password === 'adminpass') {
      login('admin');
      navigate('/admin-dashboard');
    } else if (username === 'user' && password === 'userpass') {
      login('user');
      navigate('/user-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='background-login'>
      <div className='left-side'>
        
      </div>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <span
              className="password-toggle"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;