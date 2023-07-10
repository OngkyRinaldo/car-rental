import './pickCar.scss';
import Audi from './assets/img/audi.jpg';

const PickCar = () => {
    return (
        <section className='pickcar'>
            <div className='pickcar-container'>
                <img src={Audi} alt='audi,jpg' />
                <div className='pickcar-desc'>
                    <span>Best Services</span>
                    <h2>Feel The Best Experiences With Our Car Rental Deals</h2>
                    <div className='tag'>
                        <i className='fa-sharp fa-solid fa-tags fa-rotate-90'></i>
                        <p>
                            Deals For Every Budget
                            <span>Unlock Savings for Every Wallet!</span>
                        </p>
                    </div>
                    <div className='wallet'>
                        <i className='fa-solid fa-wallet'></i>
                        <p>
                            Best Price Guarantee
                            <span>
                                Price Match Promise: Unbeatable Deals,
                                Guaranteed!
                            </span>
                        </p>
                    </div>
                    <div className='support'>
                        <i className='fas fa-headset'></i>
                        <p>
                            Support 24/7
                            <span>
                                Always Here for You: Support 24/7, Anytime,
                                Anywhere!
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PickCar;
