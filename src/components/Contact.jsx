import React from 'react'
import '../mystyles.css'


export default function Contact() {
    return (
        <div>
            <div>
                <div className="hero newhero">
                    <div className="page-header about-header">
                        <h2>#let's_talk</h2>
                        <p>LEAVE A MESSAGE , We love to hear from you!</p>
                    </div>
                </div>
                <section className="contact-details section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>Visit one of our agency locations or contact us today</h2>
                        <h3>Head Office</h3>
                        <div>
                            <li>
                                <span className="material-symbols-outlined">
                                    map
                                </span>
                                <p>I/303 Sunrise Residency Utran,Surat</p>
                            </li>
                            <li>
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                                <p>poriyatushar1@gmail.com</p>
                            </li>
                            <li>
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                                <p>7874287094</p>
                            </li>
                            <li>
                                <span className="material-symbols-outlined">
                                    schedule
                                </span>
                                <p>Monday to Saturday : 9:00am to 6:00pm </p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.7624450008491!2d72.85646527650604!3d21.22987451699916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f215df63aab%3A0xfb3087fd67225cd6!2sSunrise%20Residency%2C%20Green%20Park%20Society%2C%20Uttran%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1730295606605!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </section>
                <section className="form-details">
                    <form action>
                        <span>LEAVE A MESSAGE</span>
                        <h2>We love to hear from you</h2>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea name id cols={80} rows={10} placeholder="Your Message" defaultValue={""} />
                        <button className="normal">Submit</button>
                    </form>
                    <div className="people">
                        <div>
                            <img src="/people/1.png" alt />
                            <p><span>John doe</span> Senior Marketing Manager <br /> Phone : 000 123 456 444 <br /> Email: contact@gmail.com</p>
                        </div>
                        <div>
                            <img src="/people/2.png" alt />
                            <p><span>William Smith</span> Junior Marketing Manager <br /> Phone : 000 123 456 444 <br /> Email: contact@gmail.com</p>
                        </div>
                        <div>
                            <img src="/people/3.png" alt />
                            <p><span>Emma Stone</span> Services Manager <br /> Phone : 000 123 456 444 <br /> Email: contact@gmail.com</p>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}
