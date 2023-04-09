import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3001/login";
    try {
      const response = await axios.post(url, { email, password });
      const { message, token } = response.data;
      localStorage.setItem('token', token);
      alert(message);
      window.location.href = '/';
    } catch (error) {
      console.log(error);
      setError('Wrong email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <Link to = "/register">
            <button>Create Account</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
