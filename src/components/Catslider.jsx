import React from 'react'
import '../home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Catslider() {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3500,
        pauseOnHover: false,
        arrows: true,
    };

    return (
        <div className='catslider-section'>
            <div className="container-fluid">
                <h2 id='heading'>Shop by Category</h2>

                <Slider {...settings} className='catslider'>

                    <Link to="/men-clothing" className="no-style-link">
                        <div className="item">
                            <img src="/slider/men.avif" alt="men's Clothing" />
                            <h5>Men’s Clothing</h5>
                        </div>
                    </Link>

                    <Link to="/women-clothing" className="no-style-link">
                        <div className="item">
                            <img src="/slider/women.avif" alt="Women's Clothing" />
                            <h5>Women’s Clothing</h5>
                        </div>
                    </Link>

                    <Link to="/kid-clothing" className="no-style-link">
                    <div className="item">
                        <img src="/slider/kid.avif" alt="" />
                        <h5>Kid’s Clothing</h5>
                    </div>
                    </Link>

                    <Link to="/active-clothing" className="no-style-link">
                    <div className="item">
                        <img src="/slider/sportwear.avif" alt="" />
                        <h5>Active & Sportswear</h5>
                    </div>
                    </Link>

                    <Link to="/ethnics" className="no-style-link">
                    <div className="item">
                        <img src="/slider/ethnic.avif" alt="" />
                        <h5>Ethnic Wear</h5>
                    </div>
                    </Link>

                    <Link to="/formals" className="no-style-link">
                    <div className="item">
                        <img src="/slider/formal.avif" alt="" />
                        <h5>Formal & Office Wear</h5>
                    </div>
                    </Link>

                    <Link to="/casuals" className="no-style-link">
                    <div className="item">
                        <img src="/slider/casualwear.avif" alt="" />
                        <h5>Casual Wear</h5>
                    </div>
                    </Link>

                    <Link to="/winter-clothing" className="no-style-link">
                    <div className="item">
                        <img src="/slider/winter.avif" alt="" />
                        <h5>Winter & Outerwear</h5>
                    </div>
                    </Link>

                    <Link to="/shoes" className="no-style-link">
                    <div className="item">
                        <img src="/slider/shoes.avif" alt="" />
                        <h5>Shoes & Footwear</h5>
                    </div>
                    </Link>

                </Slider>
            </div>

        </div>
    )
}
