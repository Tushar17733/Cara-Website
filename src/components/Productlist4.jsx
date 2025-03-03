import React from 'react'
import '../mystyles.css'
import Product from './Product'

const products = [
    {
        image: "/products/f19.avif",
        brand: "Adidas",
        title: "Kids Regular Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f20.avif",
        brand: "Adidas",
        title: "Kids Graphic Print Regular T-Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f21.avif",
        brand: "Adidas",
        title: "Kids Graphic Print Regular T-Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f22.avif",
        brand: "Adidas",
        title: "Kids Graphic Print Regular T-Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f23.avif",
        brand: "Adidas",
        title: "Kids Graphic Print Regular T-Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f24.avif",
        brand: "Adidas",
        title: "Kids Graphic Print Regular T-Shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f25.avif",
        brand: "Adidas",
        title: "Kids Relaxed Fit Cargo Pants",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f26.avif",
        brand: "Adidas",
        title: "Kids Relaxed Fit Cargo Pants",
        price: "$50",
        rating: 4
    },
];
export default function Productlist4() {
    return (
        <div>
            
            <div className="product1 section-p1">
                <div className="pro-container">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}

                </div>
            </div>
        </div>
    )
}
