import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import Menu from './components/navbar/Menu';

import Footer from './components/footer/Footer';
import About from './pages/About';
import Vechicle from './pages/Vechicle';
import Teams from './pages/Teams';

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
            </Routes>

            <Footer />
        </>
    );
};

export default App;
