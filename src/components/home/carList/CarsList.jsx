import { Data } from './Data';
import './carsList.scss';
import CarList from './CarList';
import { Link } from 'react-router-dom';

const CarsList = () => {
    return (
        <section className='carList disable-text-selection'>
            <div className='carList-container'>
                <div className='carList-title'>
                    <h2>Top Deals</h2>
                </div>

                <div className='carList-card'>
                    {Data.slice(0, 4).map((data) => (
                        <CarList data={data} key={data.id} />
                    ))}
                </div>

                <button className='card-seeMore'>
                    <Link
                        to='/vechicle'
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        See More
                    </Link>
                </button>
            </div>
        </section>
    );
};

export default CarsList;
