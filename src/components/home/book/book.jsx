import './book.scss';

const Book = () => {
    return (
        <section className='book'>
            <div className='book-container'>
                <h2>Book a car</h2>
                <form>
                    <div className='car-type'>
                        <label>
                            <i className='fa-solid fa-car'></i> &nbsp; Select
                            Your Car Type <b>*</b>
                        </label>
                        <select>
                            <option>Select your car type</option>
                            <option value='Audi A1 S-Line'>
                                Audi A1 S-Line
                            </option>
                            <option value='VW Golf 6'>VW Golf 6</option>
                            <option value='Toyota Camry'>Toyota Camry</option>
                            <option value='BMW 320 ModernLine'>
                                BMW 320 ModernLine
                            </option>
                            <option value='Mercedes-Benz GLK'>
                                Mercedes-Benz GLK
                            </option>
                            <option value='VW Passat CC'>VW Passat CC</option>
                        </select>
                    </div>
                    <div className='pick-up'>
                        <label>
                            <i className='fa-solid fa-location-dot'></i> &nbsp;
                            Pick-up <b>*</b>
                        </label>
                        <select>
                            <option>Select your car type</option>
                            <option>DKI Jakarta</option>
                            <option>Surabaya</option>
                            <option>Medan</option>
                            <option>Bandung</option>
                            <option>Makasar</option>
                            <option>Semarang</option>
                            <option>Palembang</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Book;
