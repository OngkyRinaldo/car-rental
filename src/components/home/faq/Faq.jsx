import './faq.scss';
import Car from './assets/img/audi.jpg';

import { datas } from './Data';
import { useState } from 'react';

const Faq = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    };
    return (
        <section className='faq'>
            <div className='faq-container'>
                <div className='faq-title'>
                    <h2>faq</h2>
                    <h3>Frequently Asked Questions</h3>
                    <p>
                        Frequently Asked Questions About the Car Rental Booking
                        Process on Our Website: Answers to
                        <span>Common Concerns and Inquiries.</span>
                    </p>
                </div>

                <div className='faq-desc'>
                    <img src={Car} alt='audi.jpg' />
                    <div className='accordion'>
                        {datas.map((data, i) => (
                            <div key={data.id}>
                                <div
                                    className={`accordion-title ${
                                        selected === i ? 'title show' : 'title'
                                    }`}
                                    onClick={() => toggle(i)}
                                >
                                    <h2>{data.question} </h2>
                                    <span>{selected === i ? '⌄' : '⌃'} </span>
                                </div>
                                <div
                                    className={
                                        selected === i
                                            ? 'content show'
                                            : 'content'
                                    }
                                >
                                    {data.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
