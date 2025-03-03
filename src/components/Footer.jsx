import React from 'react'
import '../home.css'
import '../mystyles.css'

export default function Footer() {
    return (
        <footer className="section-p1">
            <div className="col">
                <img className="logo" src="/logo.png" alt />
                <h4>Contact</h4>
                <p><span>Address : </span>I-303 Sunrise Residency Utran,Surat</p>
                <p><span>Phone : </span>9313393734 / 9265179454</p>
                <p><span>Hours : </span>10:00 - 20:00 Mon-Sat</p>
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <img src="/facebook.png" alt />
                        <img src="/twitter.png" alt />
                        <img src="/instagram.png" alt />
                        <img src="/linkedin.png" alt />
                    </div>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="about.html">About us</a>
                <a href="cart.html">Delivery information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="contact.html">Contact us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="cart.html">View Cart</a>
                <a href="#">My Watchlist</a>
                <a href="cart.html">Track your orders</a>
                <a href="#">Help</a>
            </div>
            <div className="col-install">
                <h4>Install app</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="/pay/app.jpg" alt />
                    <img src="/pay/play.jpg" alt />
                </div>
                <p>Secured Payment Gateways</p>
                <img className="paying" src="/pay/pay.png" alt />
            </div>
            <div className="copyright">
                <p>© 2024 www.cara.com. All rights reserved.</p>
            </div>
        </footer>

    )
}
