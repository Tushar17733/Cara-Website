import React from 'react'
import '../mystyles.css'
import Product from './Product'

const products = [
    {
        image: "/products/n1.avif",
        brand: "IKON FASHION",
        title: "Regular Fit shirt",
        price: "$50",
        rating: 5
    },
    {
        image: "/products/n2.avif",
        brand: "EYEBOGLER",
        title: "Men Relaxed shirt",
        price: "$120",
        rating: 5
    },
    {
        image: "/products/n3.avif",
        brand: "KHUSHI CREATION",
        title: "Men Relaxed shirt",
        price: "$80",
        rating: 4
    },
    {
        image: "/products/n4.avif",
        brand: "MAMERU",
        title: "Men Relaxed shirt",
        price: "$80",
        rating: 4
    },
    
    {
        image: "/products/n5.avif",
        brand:"POSHAX" ,
        title: "Men Relaxed Fit Cargo",
        price: "$70",
        rating: 4
    },
    {
        image: "/products/n6.avif",
        brand: "LERIYA",
        title: "Women Oversized Fit Top",
        price: "$13",
        rating: 4
    },
    {
        image: "/products/n7.avif",
        brand: "LERIYA",
        title: "Women Floral Fit And Flare Dress",
        price: "$9",
        rating: 4
    },
    {
        image: "/products/n8.avif",
        brand: "SATRANI",
        title: "Women Cotton Saree",
        price: "$8.65",
        rating: 4
    },
];
export default function Newarrival() {
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
