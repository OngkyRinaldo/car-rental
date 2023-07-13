/* eslint-disable react/prop-types */
import { useState } from 'react';
import ShiftGear from './assets/icon/shiftgear.png';

const CarList = ({ data }) => {
    const { img, name, year, priceDay, priceMonth, transmission, fuel } = data;
    const [favorite, setFavorite] = useState(true);

    const toggle = () => {
        setFavorite(!favorite);
    };
    return (
        <>
            <div className='card'>
                <button
                    onClick={toggle}
                    className={favorite ? 'button ' : 'button red'}
                >
                    <i className='fa-solid fa-heart'></i>
                </button>

                <img src={img} alt={name} />
                <div className='card-title'>
                    <p className='card-year'>{year} </p>
                    <p className='title'>{name} </p>
                    <div className='card-price'>
                        <p className='card-priceday'>${priceDay}/Day </p>{' '}
                        <span>|</span>
                        <p className='card-pricemonth'>${priceMonth}/Month </p>
                    </div>
                </div>
                <hr />
                <div className='card-desc'>
                    <div className='shiftgear'>
                        <img src={ShiftGear} alt='shiftgear.png' />
                        <p> {transmission}</p>
                    </div>

                    <div className='gas'>
                        <i className='fa-solid fa-gas-pump'></i>
                        <p>{fuel} </p>
                    </div>
                </div>

                <div className='card-link'>
                    <a
                        href='#booking'
                        style={{ textDecoration: 'none', color: '#fff' }}
                    >
                        Rent Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default CarList;
