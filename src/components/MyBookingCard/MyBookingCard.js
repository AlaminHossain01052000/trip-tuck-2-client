import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './MyBookingCard.css'
import { useNavigate } from 'react-router-dom';




const MyBookingCard = ({ myBookedOffer }) => {
    const { _id, img, date, selectedOffer, totalCost, status,paymentStatus } = myBookedOffer;
    const navigate=useNavigate();


    const handleDeletingOffer = (id) => {
        const sureDeleting = window.confirm("Are you sure want to cancel ? ");
        if (sureDeleting) {

            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                })
        }
    }

    
    const handleNavigatingToPaymentForm=()=>{
        navigate('/paymentForm',{
            state:_id
        })
    }

    return (
        <Col>
            <Card style={{ width: '18rem',height:'30rem' }} className="mb-3">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{selectedOffer}</Card.Title>
                    <Card.Text>
                        <p>Date : {date}</p>
                        <p>Total Cost : {totalCost}</p>
                        <p>Status : {status}</p>
                        {
                            paymentStatus==='paid'
                            ?
                            <p className='pay-now-button-2' disabled={true}>Paid</p>
                            :
                            <p className='pay-now-button-2' onClick={handleNavigatingToPaymentForm}>Pay Now</p>
                        }
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDeletingOffer(_id)} disabled={paymentStatus==='paid'}>Cancel</Button>
                </Card.Body>
            </Card>
            
        </Col>


    );
};

export default MyBookingCard;