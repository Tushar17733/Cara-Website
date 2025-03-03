import React from 'react'
import '../mystyles.css'
import Product from './Product'

const products = [
    {
        image: "/products/f1.jpg",
        brand: "Adidas",
        title: "Men Astronaut T-shirt",
        price: "$50",
        rating: 4
    },
    {
        image: "/products/f2.jpg",
        brand: "Adidas",
        title: "Men Astronaut T-shirt",
        price: "$120",
        rating: 5
    },
    {
        image: "/products/f3.jpg",
        brand: "Adidas",
        title: "Men Astronaut T-shirt",
        price: "$80",
        rating: 4
    },
    {
        image: "/products/f4.jpg",
        brand: "Adidas",
        title: "Men Astronaut T-shirt",
        price: "$100",
        rating: 5
    },
    
    {
        image: "/products/f6.jpg",
        brand:"Adidas" ,
        title: "Men Astronaut Shirt",
        price: "$70",
        rating: 4
    },
    {
        image: "/products/f9.avif",
        brand: "VOOTER",
        title: "Men Relaxed Pants",
        price: "$13",
        rating: 4
    },
    {
        image: "/products/f10.avif",
        brand: "NETPLAY",
        title: "Men Regular Fit Chinos",
        price: "$9",
        rating: 4
    },
    {
        image: "/products/f11.avif",
        brand: "VOOTER",
        title: "Men Hoodie",
        price: "$8.65",
        rating: 4
    },
];
export default function Productlist() {
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
