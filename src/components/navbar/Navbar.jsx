import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';

// eslint-disable-next-line react/prop-types
const Navbar = ({ clicked, isClicked }) => {
    const handleClicked = () => {
        isClicked(!clicked);
    };

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? '#557153' : '#909090',
        };
    };
    return (
        <header>
            <nav>
                <ul className='navbar-wrapper'>
                    <li className='navLogo'>
                        <Link to='/' className='link'>
                            Car Rental
                        </Link>
                    </li>
                    <li className='navElement'>
                        <NavLink className='link' to='/' style={navLinkStyles}>
                            Home
                        </NavLink>
                    </li>
                    <li className='navElement'>
                        <NavLink
                            className='link'
                            style={navLinkStyles}
                            to='/about'
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='navElement'>
                        <NavLink
                            className='link'
                            to='/vechicle'
                            style={navLinkStyles}
                        >
                            Vehicle Models
                        </NavLink>
                    </li>
                    <li className='navElement'>
                        <NavLink
                            className='link'
                            to='/teams'
                            style={navLinkStyles}
                        >
                            Our Team
                        </NavLink>
                    </li>
                    <li className='navElement'>
                        <NavLink className='link'>Contact Us</NavLink>
                    </li>
                    <div className='nav-account'>
                        <li className='navButton'>
                            <NavLink className='link'>Sing In</NavLink>
                        </li>
                        <li className='navElement'>
                            <NavLink className='link'>Sing Up</NavLink>
                        </li>
                    </div>
                </ul>
                {!clicked ? (
                    <GiHamburgerMenu onClick={handleClicked} className='icon' />
                ) : (
                    <ImCross onClick={handleClicked} className='icon' />
                )}
            </nav>
        </header>
    );
};

export default Navbar;
