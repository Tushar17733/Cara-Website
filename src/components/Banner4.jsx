import React from 'react'
import '../home.css'
import '../mystyles.css'
import '../shop.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Banner4() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        pauseOnHover: false,
        arrows: true,
    };
    const settings2 = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
        pauseOnHover: false,
        arrows: true,
    };

    return (
        <>
            <div className='catslider-section'>
                <div className="container-fluid">
                    <h2 id="mq1">MensWear</h2>

                    <Slider {...settings} className='catslider'>

                        <Link to="/men-clothing" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s1.avif" alt="men's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/women-clothing" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s2.avif" alt="Women's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/kid-clothing" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s3.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/active-clothing" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s4.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/ethnics" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s5.avif" alt="" classname="newimage" />
                            </div>
                        </Link>



                        <Link to="/casuals" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s7.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/winter-clothing" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s8.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/shoes" className="no-style-link">
                            <div className="new-item">
                                <img src="/slider/s9.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                    </Slider>


                </div>

            </div>

            <div className='catslider-section newcatslider'>
                <div className="container-fluid">
                <h2 id="mq1">WomensWear</h2>


                    <Slider {...settings2} className='catslider '>

                        <Link to="/men-clothing" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w1.jpg" alt="men's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/women-clothing" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w2.jpg" alt="Women's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/kid-clothing" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w5.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/active-clothing" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w4.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/ethnics" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w3.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/ethnics" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w6.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>


                       <Link to="/casuals" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w7.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/winter-clothing" className="no-style-link">
                            <div className="new-item new-item2">
                                <img src="/slider/w8.jpg" alt="" classname="newimage" />
                            </div>
                        </Link>

                        

                    </Slider>


                </div>

            </div>

            <div className='catslider-section newcatslider'>
                <div className="container-fluid">
                <h2 id="mq1">KidsWear</h2>


                    <Slider {...settings2} className='catslider '>

                        <Link to="/men-clothing" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k1.avif" alt="men's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/women-clothing" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k2.avif" alt="Women's Clothing" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/kid-clothing" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k3.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/active-clothing" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k4.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/ethnics" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k5.avif" alt="" classname="newimage" />
                            </div>
                        </Link>



                        <Link to="/casuals" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k6.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/winter-clothing" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k7.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                        <Link to="/shoes" className="no-style-link">
                            <div className="new-item new-item3">
                                <img src="/slider/k8.avif" alt="" classname="newimage" />
                            </div>
                        </Link>

                    </Slider>


                </div>

            </div>
        </>
    )
}
