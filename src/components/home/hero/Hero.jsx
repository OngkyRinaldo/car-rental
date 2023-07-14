import './hero.scss';
import Jeep from './assets/img/jeep.png';
import GooglePlay from './assets/icon/game.png';
import AppleLogo from './assets/icon/apple-logo.png';

const Hero = () => {
    return (
        <section className='hero disable-text-selection'>
            <div className='hero-container'>
                <div className='hero-title'>
                    <h1>Looking Towards Saving More On Car Rental</h1>
                    <p>
                        Rent the car of your dreams. Unbeatable prices,
                        unlimited miles, flexible pick-up options and much more.
                    </p>

                    <div className='hero-socmed'>
                        <p>Download Car Rental App From</p>
                        <div className='hero-apps'>
                            <div className='google-play'>
                                <img src={GooglePlay} alt='GooglePlay' />
                            </div>
                            <div className='apple-store'>
                                <img src={AppleLogo} alt='applelogo' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hero-img'>
                    <img src={Jeep} alt='jeep.png' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
