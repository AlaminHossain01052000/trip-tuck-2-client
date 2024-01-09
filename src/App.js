import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AuthProvider from './firebase/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingForm from './components/BookingForm/BookingForm';
import MyBookings from './components/MyBookings/MyBookings';
import ManageAllBookings from './components/ManageAllBookings/ManageAllBookings';
import AddOffer from './components/AddOffer/AddOffer';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import AdminRoute from './components/AdminRoute/AdminRoute';
import PaymentForm from './components/PaymentForm/PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JvnacKB2JOo4D0XAUdhDzZ6TqtmGp2vpGMIXXSxtPKBJOo1cmcb3SlAga09S4J9nyLpCgs4dEyJ126BbM8sE1mm00BCQsgnSt');
function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route  path="*" element={NotFound}/>
            
            <Route path="/bookingform/:id"
              element={
                <PrivateRoute>
                  <BookingForm/>
                </PrivateRoute>   
              }
            />
            <Route path="/myBookings"
              element={
                <PrivateRoute>
                  <MyBookings/>
                </PrivateRoute>   
              }
            />
            <Route path="/paymentForm"
              element={
                <PrivateRoute>
                  <Elements stripe={stripePromise}>
                  <PaymentForm/>
                  </Elements>
                  
                </PrivateRoute>   
              }
            />
            
            <Route path="/addOffer"
              element={
                <AdminRoute>
                  <AddOffer/>
                </AdminRoute>   
              }
            />
            
            <Route path="/allbookings"
              element={
                <AdminRoute>
                  <ManageAllBookings/>
                </AdminRoute>   
              }
            />
              
          </Routes>
          
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
