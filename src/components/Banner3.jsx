import React from 'react'
import '../home.css'
import '../mystyles.css'

export default function Banner3() {
    return (
        <div className='lowerbanner'>
            <div class="sm-banner section-p1">
                <div class="banner-box">
                    <h4>Crazy deals</h4>
                    <h2>buy 1 get 1 free</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button class="white">Learn more</button>
                </div>
                <div class="banner-box banner-box2">
                    <h4>Spring/Summer</h4>
                    <h2>Upcoming Season</h2>
                    <span>The best classic dress is on sale at cara</span>
                    <button class="white"> Collection</button>
                </div>
            </div>
            <section>
                <div class="banner3">
                    <div class="banner-box banner-box1">

                        <h2>SEASONAL SALE</h2>
                        <h3>Winter Collection -50% OFF</h3>
                    </div>
                    <div class="banner-box banner-box2">

                        <h2>NEW FOOTWEAR COLLECTION</h2>
                        <h3>Spring-summer</h3>
                    </div>
                    <div class="banner-box banner-box3">

                        <h2>T-SHIRTS</h2>
                        <h3>New Trendy Prints</h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
