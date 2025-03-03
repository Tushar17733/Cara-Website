import React from 'react'
import '../mystyles.css'


export default function Services() {
    return (
        <>
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
        </>
    )
}
