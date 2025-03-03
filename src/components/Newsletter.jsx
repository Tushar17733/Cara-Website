import React from 'react'
import '../home.css'
import '../mystyles.css'

export default function Newsletter() {
    return (
        <div className="newsletter section-p1 section-m1 ">
            <div className="newstext">
                <h4>Sign Up for Newsletters</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Your E-mail adress" />
                <button className="normal ">Sign up</button>
            </div>
        </div>

    )
}
