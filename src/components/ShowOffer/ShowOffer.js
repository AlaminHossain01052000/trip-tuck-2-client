import React, {  useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./ShowOffer.css";

const ShowOffer = ({ offer }) => {
    const { _id, img, title, descriprion, price,videoSource } = offer;
    
    const navigate = useNavigate();
    
    const [isHovered, setIsHovered] = useState(false);

    const handleBooking = () => {
        navigate(`/bookingform/${_id}`);
    };

    
    

    return (
        <Col className="mb-5">
            <Card className="p-3"
             style={{height:'100%'}}
            >
                <div
                onMouseEnter={()=>setIsHovered(1)}
                onMouseLeave={()=>setIsHovered(0)}
                >
                    {isHovered 
                    ? 
                    (
                        <iframe 
                            width="100%" 
                            height="200px" 
                            src={`${videoSource}?autoplay=1&controls=1&showinfo=0&modestbranding=1&rel=0`}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen
                        ></iframe>
                    ) : 
                    (
                        <Card.Img variant="top" src={img}/>
                    )}
                </div>
                
            
                
                <div className="trip-price">
                    <p> &#2547; {price}</p>
                </div>
                <Card.Body className="text-start">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{descriprion}</Card.Text>
                </Card.Body>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button className='btn-book-now' onClick={handleBooking}>
                        Book Now <i className="fas fa-arrow-right ms-2"></i>
                    </button>
                </div>
            </Card>
        </Col>
    );
};

export default ShowOffer;
