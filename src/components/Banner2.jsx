import React from 'react'
import '../home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Banner2() {
    const settings = {
        dots: true,               
        infinite: true,           
        speed: 1200,               
        slidesToShow: 1,          
        slidesToScroll: 1,        
        autoplay: true,           
        autoplaySpeed: 4000 ,
        pauseOnHover: false      
      };

  return (
    <div className='homeslider'>
      <Slider {...settings}>
        <div><img src="/slider/b6.jpg" alt="Slide 1" className='image'/></div>
        <div><img src="/slider/b7.jpg" alt="Slide 2" className='image'/></div>
        <div><img src="/slider/b9.jpg" alt="Slide 3" className='image'/></div>
        <div><img src="/slider/b10.jpg" alt="Slide 4" className='image'/></div>
      </Slider>
    </div>
  )
}
