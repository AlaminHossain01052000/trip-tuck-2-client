import React from 'react';
import "./OurTourGallery.css";
const OurTourGallery = () => {
    return (
        <div id="our-tour-gallery" className='my-5'>
            <div>
                <h1 className="heading-title">Our Tour Gallery</h1>
                <hr className="heading-line mb-4" />
            </div>
            <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div class="col">
                <div class="card h-100">
                    <img src="https://img.freepik.com/free-photo/woman-taking-photo-rural-surroundings_23-2149125495.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" class="card-img-top" alt="..."/>
                   
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1085.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" class="card-img-top" alt="..."/>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://img.freepik.com/free-photo/wandering-moment-nature-infants-walk-play_1303-3144.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" class="card-img-top" alt="..."/>
                </div>
            </div>

                </div>
            </div>
                
                {/* <div className="d-lg-flex align-items-center">
                    <div className="w-50">
                        <img src="https://img.freepik.com/premium-photo/long-exposure-photo-four-hikers-sitting-around-bonfire-warming-night-autumn-forest_229760-205.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" height="600px" className="w-100" alt="" />
                    </div>
                    <div className="d-lg-flex flex-column w-50">
                        <img height="300px" src="https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" alt="" />
                        <img height="300px" src="https://img.freepik.com/free-photo/successful-hiker-friends-enjoy-view-mountain-peak_23-2148139711.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" alt="" />
                    </div>
                </div>
                <div className="d-lg-flex align-items-center">
                    <div className="w-75 d-lg-flex flex-column">
                        <img src="https://img.freepik.com/free-photo/joyful-family-picnic-around-burning-coal-generated-by-ai_188544-40746.jpg?size=626&ext=jpg&uid=R54822369&ga=GA1.1.305507892.1696573419&semt=ais" height="300px" className="w-100" alt="" />
                    </div>
                    <div className="w-25 text-start ms-3">
                        <h1 className="font-maiden-orange">Our Travellers</h1>
                        <h3 className="font-alumni-sans">Visited many destination and </h3>
                        <h2 className="font-inika mb-3">Captured their</h2>
                        <h1 className="font-gayathri">Precious</h1>
                        <h2 className="font-inika">moments</h2>
                        <div>
                            <p className="book-now-para">Explore More <i className="fas fa-arrow-right ms-2"></i> </p>
                        </div>
                    </div>
                </div> */}
            
        </div>
    );
};

export default OurTourGallery;