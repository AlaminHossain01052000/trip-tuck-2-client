import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='my-5'>
      <h2 className='heading-title'>Contact Us</h2>
    <div className='container'>
    <div className="row">
        <div className='col contact-us-container'>
        <div className="contact-info">
            <p><strong>Office Location:</strong> 123 Main Street, Cityville, Country</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/trip-tuck" target="_blank" rel="noopener noreferrer">Trip Tuck LinkedIn</a></p>
            <p><strong>Facebook:</strong> <a href="https://www.facebook.com/triptuck" target="_blank" rel="noopener noreferrer">Trip Tuck Facebook</a></p>
            <p><strong>WhatsApp Number:</strong> +1 123 456 7890</p>
            <p><strong>Telephone Number:</strong> +1 987 654 3210</p>
            <p><strong>Email:</strong> info@trip-tuck.com</p>
        </div>

        <h3 className='contact-us-form-heading'>Send us a Message</h3>
        <form className='contact-us-form'>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>

            <div className="mb-3">
            <label htmlFor="problemDescription" className="form-label">Your Queries</label>
            <textarea className="form-control" id="problemDescription" rows="4" placeholder="Describe your problem..."></textarea>
            </div>

            <button className="btn btn-danger banner-explore-btn">Send</button>
        </form>
        </div>
        <div className='col'>
            <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" alt="" />
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default ContactUs;

// import React from 'react';
// import "./ContactUs.css";
// const ContactUs = () => {
   
//     return (
//         <div className="w-75 mx-auto my-5">
//             <h1 className="heading-title">Contact Us</h1>
//             <hr className="heading-line mb-4" />
            
//                 <div className="py-3">
//                     <div className="contact-card p-4 rounded">

//                         <img src="https://i.ibb.co/tZMPb2H/download.png" alt="" width="200px" height="200px" className="mx-auto" />
//                         <hr />
//                         <div className="text-center text-danger">
//                             <h5>0191234550</h5>


//                         </div>
//                         <button className="btn btn-danger mt-4">Call Now</button>
//                     </div>
//                 </div>
//                 <div className="py-3">
//                     <div className="contact-card p-4 rounded">

//                         <img src="" alt="" width="200px" height="200px" className="mx-auto" />
//                         <hr />
//                         <div className="text-center text-danger">
//                             <h5>198/4 Block , Gulshan ,Dhaka</h5>

//                         </div>
//                         <button className="btn btn-danger mt-4">See Maps</button>
//                     </div>
//                 </div>
//                 <div className="py-3">
//                     <div className="contact-card p-4 rounded">

//                         <img src="" alt="" width="200px" height="200px" className="mx-auto" />
//                         <hr />
//                         <div className="text-center text-danger">
//                             <h5>www.trip-tuck.com</h5>



//                         </div>
//                         <button className="btn btn-danger mt-4">Visit Now</button>
//                     </div>
//                 </div>
//                 <div className="py-3">
//                     <div className="contact-card p-4 rounded">

//                         <img src="" alt="" width="200px" height="200px" className="mx-auto" />
//                         <hr />
//                         <div className="text-center text-danger">
//                             <h5>triptuck2019@gmail.com</h5>


//                         </div>
//                         <button className="btn btn-danger mt-4">Mail Now</button>
//                     </div>
//                 </div>
//                 <div className="py-3">
//                     <div className="contact-card p-4 rounded">

//                         <img src="" alt="" width="200px" height="200px" className="mx-auto" />
//                         <hr />
//                         <div className="text-center text-danger" width="200px">
//                             <h5>www.facebook.com/triptuck</h5>
//                         </div>
//                         <button className="btn btn-danger mt-4">Visit Now</button>
//                     </div>
//                 </div>

            
//         </div>
//     );
// };

// export default ContactUs;