// src/components/LogInForm.js
import React, { useState } from 'react';

function LogInForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send login credentials to the server for authentication
    console.log('Login credentials submitted:', credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LogInForm;
