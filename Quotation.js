import React from 'react'
import './Quotation.css'
import Pricing from './components/Pricing'
import { PricingList } from './helpers/PricingList';

const Quotation = () => {
  return (<section className='quote-main'>
    <div>
    <h1 className='quote-head'>WEBSITES DEVELOPMENT SERVICES STARTING AT ONLY 15999/-</h1>
    <h4 className='quote-subhead'>FREE DOMAIN | FREE HOSTING | FREE PROFESSIONAL EMAILS</h4>
    </div>
    <div className='quote-div'>
        <img className='quote-img' 
        src="https://webzplot.com/wp-content/uploads/2020/11/Hotel-Booking-amico-1-1024x1024.png.webp" 
        alt="" height={'300px'} width={'300px'} />
        <div className='quote-subdiv'>
            <h1 className='quote-head'>GET A WEBSITE DEVELOPED FROM A PROFESSIONAL WEBSITE DEVELOPMENT COMPANY.</h1>
            <p className='quote-para'>WebzPlot is a website development company and a digital marketing agency with highly qualified professionals. Our team is highly skilled and experienced in understanding the general consumer behaviours and moderating the UX of the website according to the purchase behaviours. Your website will be carefully tailored with precisely following our proprietary 142 steps procedure which results in extremely high quality <b>ERROR FREE WEBSITE DEVELOPMENT</b>which generates results.</p>
        </div>
    </div>
    <div className='section-padding'>
    <h1 className='quote-head'>PREMIUM WEBSITE DEVELOPMENT SERVICE - AFFORDABLE PRICING</h1>
    <h4 className='quote-subhead'>FREE DOMAIN | FREE HOSTING | FREE PROFESSIONAL EMAILS</h4>
    </div>
    <div className='row'>
    {PricingList.map((data, index) => (
        <Pricing key={index} data={data} list1={data.list1} list2={data.list2}/>
      ))}
    </div>
    </section>
  )
}

export default Quotation