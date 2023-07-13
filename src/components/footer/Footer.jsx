import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-email'>
                    <h2>
                        Subcribe for Any News Updates From
                        <span>Car Rental</span>
                    </h2>

                    <div className='footer-input'>
                        <input type='text' placeholder='Enter Your Email' />

                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='footer-wrapper'>
                    <div className='footer-desc'>
                        <h3>Car Rental</h3>
                        <p>
                            We offers a big range of vehicles for all your
                            driving needs. We have the perfect car to meet your
                            needs.
                        </p>
                    </div>
                    <div className='footer-company'>
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <Link to='#' className='link'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    Doctors
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-support'>
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <Link to='#' className='link'>
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    PArtner With Us
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-socmed'>
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <Link to='#' className='link'>
                                    <i className='fa-brands fa-facebook'></i>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    <i className='fa-brands fa-linkedin'></i>
                                    Linkedin
                                </Link>
                            </li>
                            <li>
                                <Link to='#' className='link'>
                                    <i className='fa-brands fa-twitter'></i>
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='copyright'>
                    <p>
                        Design by
                        <Link
                            to='https://www.behance.net/gallery/161694653/car-rental-website-design?tracking_source=search_projects|car+rental+web+design'
                            target='_blank'
                            className='copyright-link'
                        >
                            car rental website design
                        </Link>
                        copyright &#169; 2023. All rights are reserved
                    </p>

                    <Link
                        to='https://github.com/OngkyRinaldo/car-rental'
                        target='_blank'
                        className='copyright-link-github'
                    >
                        <i className='fa-brands fa-github'></i>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
