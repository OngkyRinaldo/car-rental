import './vehicle.scss';
import { Data } from '../home/carList/Data';
import CarList from '../home/carList/CarList';

const Index = () => {
    return (
        <section className='vehicle disable-text-selection'>
            <div className='vehicle-container'>
                <div className='vehicle-topdeals'>
                    <h2>Top Deals</h2>

                    <div className='vehicle-card'>
                        {Data.map((data) => (
                            <CarList data={data} key={data.id} />
                        ))}
                    </div>
                </div>
                <div className='vehicle-topBrands'>
                    <h2>Products From Top Brands</h2>

                    <div className='vehicle-card'>
                        {Data.map((data) => (
                            <CarList data={data} key={data.id} />
                        ))}
                    </div>
                </div>
                <div className='vehicle-featuredBrands'>
                    <h2>Our Featured Brands</h2>

                    <div className='vehicle-card'>
                        {Data.map((data) => (
                            <CarList data={data} key={data.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
