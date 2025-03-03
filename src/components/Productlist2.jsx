import React from 'react'
import '../mystyles.css'
import Product from './Product'

const products = [
    {
        image: "/products/f12.webp",
        brand: "BIKASAAB",
        title: "Women Embroidered Flared Kurta",
        price: "$50",
        rating: 5
    },
    {
        image: "/products/f12.avif",
        brand: "BIKASAAB",
        title: "Women Embroidered Flared Kurta",
        price: "$60",
        rating: 4
    },
    {
        image: "/products/f13.avif",
        brand: "NYRIKA",
        title: "Women Printed Tunic",
        price: "$80",
        rating: 4
    },
    {
        image: "/products/f14.avif",
        brand: "FUSION",
        title: "Women Printed Relaxed Tunic",
        price: "$45",
        rating: 4
    },
    
    {
        image: "/products/f15.avif",
        brand:"GRIVA" ,
        title: "Women Unstitched Saree",
        price: "$70",
        rating: 4
    },
    {
        image: "/products/f16.avif",
        brand: "VILLAGIUS",
        title: "Women Banarasi Saree ",
        price: "$13",
        rating: 4
    },
    {
        image: "/products/f17.avif",
        brand: "NETPLAY",
        title: "Women Exclusive Dress",
        price: "$9",
        rating: 4
    },
    {
        image: "/products/f18.avif",
        brand: "AZIRA",
        title: "Women Abstract Skirt",
        price: "$8.65",
        rating: 4
    },
];
export default function Productlist2() {
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
