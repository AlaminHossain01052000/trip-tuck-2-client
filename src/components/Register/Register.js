import React, { useState } from 'react';
import { useNavigate  } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import "./Register.css";
import { Link } from 'react-router-dom';
const Register = () => {
    
    const [error,setError] = useState(false)

    const navigate = useNavigate();
    
    const {  registerNewUser } = useFirebase();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        registerNewUser(formData.name,formData.email,formData.password,navigate)
        console.log('Form submitted:', formData);
      };
    
    return (
        <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className='register-form-heading'>Sign up</h2>


        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit" className='btn btn-danger'>Submit</button>
        {error&&<h6>{error}</h6>}
      </form>

      
      <h5 className='mt-3'>Already signed up?</h5>
      <h6><Link to="/login">Sign in</Link> Now</h6>
    </div>
    
    );
};

export default Register;