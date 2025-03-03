import React from 'react'
import '../shop.css'
import '../mystyles.css'

export default function Cart() {
    return (
        <div>
            <div>
                <div className="hero newhero">
                    <div className="page-header about-header">
                        <h2>#cart</h2>
                        <p>Add your coupon code &amp; SAVE upto 70%!</p>
                    </div>
                </div>
                <section className="cart section-p1">
                    <table width="100%">
                        <thead>
                            <tr>
                                <td>REMOVE</td>
                                <td>IMAGE</td>
                                <td>PRODUCT</td>
                                <td>PRICE</td>
                                <td>QUANTITY</td>
                                <td>SUBTOTAL</td>
                            </tr>
                        </thead>
                        <tbody className="cartItems">
                            <tr className="cart-row">
                                <td><span id="cancel" className="material-symbols-outlined">
                                    do_not_disturb_on
                                </span></td>
                                <td><img src="/products/f1.jpg" alt /></td>
                                <td>Cartoon Astronaut T-shirts</td>
                                <td className="cart-price">$50</td>
                                <td className="cart-quantity"><input type="number" defaultValue={1} /></td>
                                <td className="cart-subtotal">$50</td>
                            </tr>
                            <tr className="cart-row">
                                <td><span id="cancel" className="material-symbols-outlined">
                                    do_not_disturb_on
                                </span></td>
                                <td><img src="/products/f2.jpg" alt /></td>
                                <td>Cartoon Astronaut T-shirts</td>
                                <td className="cart-price">$118.19</td>
                                <td className="cart-quantity"><input type="number" defaultValue={1} /></td>
                                <td className="cart-subtotal">$118.19</td>
                            </tr>
                            <tr className="cart-row">
                                <td><span id="cancel" className="material-symbols-outlined">
                                    do_not_disturb_on
                                </span></td>
                                <td><img src="/products/f3.jpg" alt /></td>
                                <td>Cartoon Astronaut T-shirts</td>
                                <td className="cart-price">$118.19</td>
                                <td className="cart-quantity"><input type="number" defaultValue={1} /></td>
                                <td className="cart-subtotal">$118.19</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="cart-add section-p1">
                    <div className="coupon">
                        <h3>Apply Coupon</h3>
                        <div>
                            <input type="text" placeholder="Enter your coupon" />
                            <button className="normal">Apply</button>
                        </div>
                    </div>
                    <div className="subtotal">
                        <h3>Cart Totals</h3>
                        <table>
                            <tbody><tr className="diwali">
                                <td>Cart Subtotal</td>
                                <td className="cart-total-price">$335</td>
                            </tr>
                                <tr className="diwali">
                                    <td>Shipping</td>
                                    <td>free</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td className="cart-total-price"><strong>$335</strong></td>
                                </tr>
                            </tbody></table>
                        <button className="normal">Proceed to checkout</button>
                    </div>
                </section>
            </div>

        </div>
    )
}
