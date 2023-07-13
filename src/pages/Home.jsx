import Banner from '../components/home/banner/Banner';

import CarsList from '../components/home/carList/CarsList';
import Faq from '../components/home/faq/Faq';
import Hero from '../components/home/hero/Hero';

const Home = () => {
    return (
        <main>
            <Hero />

            <Banner />
            <CarsList />
            <Faq />
        </main>
    );
};

export default Home;
