import React from 'react'
import '../home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    const settings = {
        dots: true,               
        infinite: true,           
        speed: 1200,               
        slidesToShow: 1,          
        slidesToScroll: 1,        
        autoplay: true,           
        autoplaySpeed: 3500 ,
        pauseOnHover: false      
      };

  return (
    <div className='homeslider'>
      <Slider {...settings}>
        <div><img src="/slider/b1.jpg" alt="Slide 1" className='image'/></div>
        <div><img src="/slider/b2.jpg" alt="Slide 2" className='image'/></div>
        <div><img src="/slider/b3.jpg" alt="Slide 3" className='image'/></div>
        <div><img src="/slider/b5.jpg" alt="Slide 4" className='image'/></div>
      </Slider>
      
    </div>
  )
}
