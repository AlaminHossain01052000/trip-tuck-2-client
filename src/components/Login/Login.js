import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
    
    const [error, setError] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || "/home";
    const {  loading,loginUser,googleLogIn } = useFirebase();
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
        
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
        loginUser(formData.email,formData.password,navigate,location)
        console.log('Form submitted:', formData);
      };
    const handleGoogleLogIn = () => {
      googleLogIn(navigate,location)
    }
    return (
        <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className='register-form-heading'>Login</h2>


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


        <button type="submit" className='btn btn-danger'>Login</button>
        {error&&<h6>{error}</h6>}
      </form>

      <div className="google-signup">
        <p>Or sign in using</p>
        <button className='btn btn-primary' onClick={handleGoogleLogIn}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
        </button>
        
        {/* <img className="google-logo" src="https://img.freepik.com/premium-photo/google-application-logo-3d-rendering-white-background_41204-8013.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" alt="" onClick={googleLogIn} />  */}
      </div>
      <h5 className='mt-3'>Not signed up yet!</h5>
      <h6><Link to="/register">Sign up</Link> Now</h6>
    </div>
    //     <div className="mt-5">
    //         {
    //             error && <div><h1 className="text-warning">User Login Failed !!!</h1></div>
    //         }
    //         <h1 className="mb-5 text-danger">Please Login Here</h1>
    //         <div className="register-container">
    //   <form className="register-form">
    //     <h2>Register</h2>

    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input type="text" id="name" name="name" required />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input type="email" id="email" name="email" required />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="password">Password</label>
    //       <input type="password" id="password" name="password" required />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="confirmPassword">Confirm Password</label>
    //       <input type="password" id="confirmPassword" name="confirmPassword" required />
    //     </div>

    //     <button type="submit">Register</button>
    //   </form>

    //   <div className="google-signup">
    //     <p>Or sign up using</p>
    //     <img
    //       src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    //       alt="Google Logo"
    //     />
    //   </div>
    // </div>
    //         {/* <img style={{ marginBottom: "220px","width":"20%" }}title="Click to login" className="google-logo" src="https://img.freepik.com/premium-photo/google-application-logo-3d-rendering-white-background_41204-8013.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" alt="" onClick={googleLogIn} /> */}
         

    //     </div>
    );
};

export default Login;