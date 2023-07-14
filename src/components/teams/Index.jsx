import Breadcrumb from './breadcrumb/Breadcrumb';
import './teams.scss';
import team1 from './assets/img/1.png';
import team2 from './assets/img/2.png';
import team3 from './assets/img/3.png';

const Index = () => {
    return (
        <section className='team disable-text-selection'>
            <Breadcrumb />
            <div className='team-container'>
                <h2>Our Team Members</h2>
                <div className='ourTeam'>
                    <div className='team-1'>
                        <img src={team1} alt='1.png' />

                        <h3>Saqlain essay</h3>
                        <span>CEO</span>

                        <div className='team-socmed'>
                            <div className='facebook'>
                                <i className='fa-brands fa-facebook-f'></i>
                            </div>
                            <div className='twitter'>
                                <i className='fa-brands fa-twitter'></i>
                            </div>
                            <div className='linkedin'>
                                <i className='fa-brands fa-linkedin-in'></i>
                            </div>
                        </div>
                    </div>
                    <div className='team-2'>
                        <img src={team2} alt='2.png' />

                        <h3>Kareem Reheat</h3>
                        <span>sales manager</span>

                        <div className='team-socmed'>
                            <div className='facebook'>
                                <i className='fa-brands fa-facebook-f'></i>
                            </div>
                            <div className='twitter'>
                                <i className='fa-brands fa-twitter'></i>
                            </div>
                            <div className='linkedin'>
                                <i className='fa-brands fa-linkedin-in'></i>
                            </div>
                        </div>
                    </div>
                    <div className='team-3'>
                        <img src={team3} alt='3.png' />

                        <h3>Briana Ross</h3>
                        <span>Technician</span>

                        <div className='team-socmed'>
                            <div className='facebook'>
                                <i className='fa-brands fa-facebook-f'></i>
                            </div>
                            <div className='twitter'>
                                <i className='fa-brands fa-twitter'></i>
                            </div>
                            <div className='linkedin'>
                                <i className='fa-brands fa-linkedin-in'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
