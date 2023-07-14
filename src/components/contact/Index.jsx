import './contact.scss';

const Index = () => {
    return (
        <section className='contact'>
            <div className='contact-container'>
                <div className='contact-wrapper'>
                    <div className='contact-additional'>
                        <h2>Need additional information?</h2>

                        <p>
                            A multifaceted professional skilled in multiple
                            fields of research, development as well as a
                            learning specialist. Over 15 years of experience.
                        </p>

                        <div className='phone'>
                            <i className='fa-solid fa-phone'></i>
                            (123) 456-7890
                        </div>
                        <div className='mail'>
                            <i className='fa-solid fa-envelope'></i>
                            carRentail@rental.com
                        </div>
                        <div className='location'>
                            <i className='fa-solid fa-location-dot'></i>
                            jakarta Indonesia
                        </div>
                    </div>
                    <div className='contact-form'>
                        <form>
                            <div className='fullname'>
                                <label htmlFor='fullname'>
                                    Full Name <span>*</span>
                                </label>
                                <input
                                    type='text'
                                    placeholder='E.g: "Jhon Doe" '
                                    id='fullname'
                                />
                            </div>
                            <div className='email'>
                                <label htmlFor='email'>
                                    Email <span>*</span>
                                </label>
                                <input
                                    type='email'
                                    placeholder='youremail@example.com '
                                    id='email'
                                />
                            </div>
                            <div className='text-area'>
                                <label htmlFor='text-area'>
                                    Tell us about it <span>*</span>
                                </label>
                                <textarea
                                    name='text-area'
                                    id='text-area'
                                    cols='50'
                                    rows='10'
                                >
                                    Write Here..
                                </textarea>
                            </div>

                            <button className='send'>
                                Send Message
                                <i className='fa-solid fa-paper-plane-top'></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
