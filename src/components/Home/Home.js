import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DiscountBanner from '../DiscountBanner/DiscountBanner';
import OurOffers from '../OurOffers/OurOffers';
import OurTourGallery from '../OurTourGallery/OurTourGallery';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <OurOffers></OurOffers>
            <OurTourGallery></OurTourGallery>
            <DiscountBanner></DiscountBanner>
            <ContactUs></ContactUs>
            <Footer/>
        </div>
    );
};

export default Home;
