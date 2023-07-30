import React from 'react'
import './pricingCard.css'
// import { PricingList } from '../helpers/PricingList';
import { useState } from 'react';

const Pricing = ({ data, list1, list2 }) => {
    const [More, setMore] = useState(true)
    const toggleBtn = () => { setMore(!More) }
    return (
        <section id='overview'>
            <div className="white-box">
                <div className='box-head'>
                    <h1><b>{data.title}</b></h1>
                    <p>{data.sub}</p>
                    <h1><b>₹ {data.price}</b></h1>
                    <ul className='list'>{
                        list1.map((i) => {
                            return (
                                <li>{i}</li>
                            )
                        })
                    }
                    </ul>
                    <button onClick={toggleBtn} className='morebtn'>View {More ? "More":"Less"}</button>
                </div>
                <div style={More ? { display: "none" } : { display: "block" }}>
                    <ul className='list'>{
                        list2.map((i) => {
                            return (
                                <li>{i}</li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Pricing


