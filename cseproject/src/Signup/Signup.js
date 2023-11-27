import React, { useState } from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const g=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError('Password and Confirm Password do not match');
      return;
    }

    // Reset password match error if previous error exists
    setPasswordMatchError(null);

    // Perform the actual signup logic here (e.g., send data to server)
    g('/login');
    console.log('Form submitted:', formData);
  };

  // ...

return (
  <div className='parent'>
    <form onSubmit={handleSubmit} className='big'>
    <h2 style={{ fontFamily: 'Verdana, sans-serif', color: 'black', fontSize: '24px', marginBottom: '20px' }}>        
     Sign Up
        </h2>
      <label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
      {passwordMatchError && <p style={{ color: 'red' }}>{passwordMatchError}</p>}
      <button type="submit" >Sign Up</button>
    </form>
  </div>
);

};

export default SignUpPage;
