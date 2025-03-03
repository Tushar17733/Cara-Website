import React from 'react'
import '../shop.css'
import '../mystyles.css'

export default function About() {
    return (
        <div>
            <div>
                <div className="about-hero">
                    <img src="/about/about.png" alt="" />
                </div>
                <section className="about-head section-p1">
                    <img src="/about/a6.jpg" alt />
                    <div className="about-us-description">
                        <h2>Who We Are?</h2>
                        <p>Welcome to our e-commerce store, where quality meets convenience. We are dedicated to bringing you a
                            curated selection of products that combine style, innovation, and everyday essentials. Our journey began
                            with a simple goal: to offer customers a seamless shopping experience with a diverse range of
                            high-quality products. <br />
                            Explore our collections and discover more about us! </p>
                        <abbr title>At the heart of everything we do is a commitment to exceptional customer service, reliable
                            delivery, and a passion for making your shopping journey enjoyable.</abbr>
                        <marquee className="newtag" bgcolor="#ccc" loop={-1} scrollamount={5} width="100%">We believe in building trust
                            and transparency, ensuring that every purchase feels personal and valued.</marquee>
                    </div>
                </section>
                <section className="about-app section-p1">
                    <h1>Download our <a href="#">App</a></h1>
                    <div className="video">
                        <video autoPlay loop muted src="/about/1.mp4" />
                    </div>
                </section>
                
                <h2 id="mq1">Our Services</h2>

                <div className="feature section-p1 section-no-p1">
                    <div className="fe-box">
                        <img src="/features/f1.png" alt />
                        <h6>Free Shipping</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/features/f2.png" alt />
                        <h6 id="bg-2">Online order</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/features/f3.png" alt />
                        <h6 id="bg-3"> save money</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/features/f4.png" alt />
                        <h6 id="bg-4">Promotions</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/features/f5.png" alt />
                        <h6 id="bg-5">Happy sell</h6>
                    </div>
                    <div className="fe-box">
                        <img src="/features/f6.png" alt />
                        <h6 id="bg-6">24/7 Support</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}
