import Banner from '../components/home/banner/Banner';
import Book from '../components/home/book/Book';
import CarsList from '../components/home/carList/CarsList';
import Hero from '../components/home/hero/Hero';

const Home = () => {
    return (
        <main>
            <Hero />
            <Book />
            <Banner />
            <CarsList />
        </main>
    );
};

export default Home;
