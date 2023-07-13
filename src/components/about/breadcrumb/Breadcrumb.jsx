import { Link } from 'react-router-dom';
import './breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <div className='container'>
            <div className='breadcrumb-background' />
            <div className='bradcrumb-link'>
                <h2>About</h2>

                <p>
                    <Link to='/' className='link'>
                        Home/
                    </Link>
                    About
                </p>
            </div>
        </div>
    );
};

export default Breadcrumb;
