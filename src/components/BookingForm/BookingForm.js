import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./BookingForm.css";

const BookingForm = () => {
    const { id } = useParams();
    const [offers, setOffers] = useState([]);
    const [myOffer, setMyOffer] = useState({})
    
    const { user } = useAuth();
console.log(user)

    useEffect(() => {
        fetch("http://localhost:5000/offers")
            .then(res => res.json())
            .then(data => {

                setOffers(data)
                data.map(offer => {
                    if (offer._id === id) {
                        setMyOffer(offer)
                    }
                })
            })
    }, [id])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


        if (myOffer) {
            data.img = myOffer.img;
            data.status = "pending";
            data.price = myOffer.price;
            data.totalCost = (data.numberOfPeople * myOffer?.price);
            data.selectedOffer = myOffer.title;
            data.paymentStatus="unpaid"
            fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {

                    if (data.insertedId) {
                        alert("successfully submitted");
                        reset();
                    }

                })
        }






    };
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    };
    const [minDate, setMinDate] = useState(getTodayDate());

    return (

        <div id="booking-form">
            {offers && <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} defaultValue={user.displayName} />
                <input {...register("email", { required: true })} placeholder="Your Email" defaultValue={user.email} />
                <input {...register("address", { required: true })} placeholder="Your Address" />

                <input type="text" defaultValue={myOffer?.title} {...register("selectedOffer")} />
                <input type="number"  {...register("numberOfPeople")} placeholder="Number of trevellers" />
                <input type="date"  {...register("date")} min={minDate}/>

                <input type="submit" />
            </form>}
        </div>
    );
};

export default BookingForm;