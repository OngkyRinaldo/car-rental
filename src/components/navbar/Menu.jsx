import { NavLink } from 'react-router-dom';
import './menu.scss';
const Menu = () => {
    return (
        <div className='Navbars'>
            <ul className='NavbarWrappers'>
                <li className='NavbarElement'>
                    <NavLink className='link' to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='NavbarElement'>
                    <NavLink className='link' to='/about'>
                        About Us
                    </NavLink>
                </li>
                <li className='NavbarElement'>
                    <NavLink className='link'>Contact Us</NavLink>
                </li>
                <div className='nav-account'>
                    <li className='navButton'>
                        <NavLink className='link'>Sing Up</NavLink>
                    </li>
                    <li className='navElement'>
                        <NavLink className='link'>Sing In</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default Menu;
