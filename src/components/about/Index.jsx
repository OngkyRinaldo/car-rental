import './about.scss';

import ShowRoom from './assets/img/showroom.jpg';
const IndexAbout = () => {
    return (
        <section className='about'>
            <img src={ShowRoom} alt='showroom.jpg' className='about-image' />
            <div className='about-container'>
                <div className='about-desc'>
                    <h2>About Us</h2>
                    <p>
                        Welcome to our car rental website, your premier
                        destination for reliable and convenient transportation
                        solutions. We pride ourselves on offering a diverse
                        fleet of vehicles to cater to your unique needs, whether
                        it&#39;s a business trip, a family vacation, or simply
                        getting around town. With a user-friendly platform,
                        transparent pricing, and exceptional customer service,
                        we aim to provide a seamless and enjoyable rental
                        experience. Our commitment to safety and reliability
                        ensures that every vehicle in our fleet is regularly
                        inspected and maintained to the highest standards. From
                        pickup to drop-off, our dedicated team is here to assist
                        you every step of the way. Choose us for your car rental
                        needs and let us make your travel experience a memorable
                        one.
                    </p>
                </div>

                <div className='about-media'>
                    <h3>Our Social Media Handles</h3>
                    <div className='about-socmed'>
                        <div className='facebook'>
                            <i className='fa-brands fa-facebook '></i>
                        </div>
                        <div className='twitter'>
                            <i className='fa-brands fa-square-twitter'></i>
                        </div>
                        <div className='instagram'>
                            <i className='fa-brands fa-square-instagram'></i>
                        </div>
                        <div className='linkedin'>
                            <i className='fa-brands fa-linkedin'></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndexAbout;
