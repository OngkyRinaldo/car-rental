import Banner from '../components/home/banner/Banner';
import Book from '../components/home/book/Book';
import CarsList from '../components/home/carList/CarsList';
import Faq from '../components/home/faq/Faq';
import Hero from '../components/home/hero/Hero';

const Home = () => {
    return (
        <main>
            <Hero />
            <Book />
            <Banner />
            <CarsList />
            <Faq />
        </main>
    );
};

export default Home;
