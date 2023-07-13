import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Menu from './components/navbar/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Vechicle from './pages/Vechicle';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    const [clicked, isClicked] = useState(false);
    return (
        <>
            <Navbar clicked={clicked} isClicked={isClicked} />
            {clicked ? <Menu /> : null}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/vechicle' element={<Vechicle />} />
                <Route path='/teams' element={<Teams />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
