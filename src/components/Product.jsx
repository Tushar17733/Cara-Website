import React from 'react'
import '../mystyles.css'
import { FaShoppingCart } from 'react-icons/fa';

export default function Product({ image, brand, title, price, rating }) {
    return (
        <div className="pro">
            <img src={image} alt />
            <div className="des">
                <span>{brand}</span>
                <h5>{title}</h5>
                <div className="stars">
                {"⭐".repeat(rating)}
                </div>
                <div className="productfooter">

                    <h4>{price}</h4>
                    <button className="add-to-cart-button">
                        <FaShoppingCart className="cart-icon" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
