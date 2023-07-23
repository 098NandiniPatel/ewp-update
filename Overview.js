import React from 'react'
import './overview.css'

const Overview = ({ data }) => {
    return (
        <section className='section-padding' id='overview'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="overview-right">
                            <h3 className="sec-head">
                                {data[0].heading}
                            </h3>
                            <h4 className="sub-head">
                                {data[0].subheading}
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="white-box box1">
                            <div className="box-img">
                                <img src={data[1].img} alt="" />

                            </div>
                            <p><b>{data[1].title}</b></p>
                            <p>{data[1].desc}</p>
                        </div>
                        <div className="white-box box3">
                            <div className="box-img">
                                <img src={data[3].img} alt="" />

                            </div>
                            <p><b>{data[3].title}</b></p>
                            <p>{data[3].desc}</p>


                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="white-box box2">
                            <div className="box-img">
                                <img src={data[2].img} alt="" />

                            </div>
                            <p><b>{data[2].title}</b></p>
                            <p>{data[2].desc}</p>

                        </div>
                        <div className="white-box box4">
                            <div className="box-img">
                                <img src={data[4].img} alt="" />

                            </div>
                            <p><b>{data[4].title}</b></p>
                            <p>{data[4].desc}</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Overview