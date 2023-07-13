import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import Menu from './components/navbar/Menu';

import Footer from './components/footer/Footer';

const App = () => {
    const [clicked, isClicked] = useState(false);
    return (
        <>
            <Navbar clicked={clicked} isClicked={isClicked} />
            {clicked ? <Menu /> : null}
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
