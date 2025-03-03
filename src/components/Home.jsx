import React from 'react'
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Catslider from './Catslider';
import Productlist from './Productlist';
import Productlist2 from './Productlist2';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../home.css'
import '../mystyles.css'
import Services from './Services';
import Banner3 from './Banner3';
import Newarrival from './Newarrival';

export default function Home() {
    return (
        <div>
            <Banner />
            <Banner2 />
            <Catslider />
            <h2 id="mq1">Featured products</h2>

            <Outlet />

            <h2 id="mq1">New Arrivals</h2>
            <Newarrival/>
            <Services />
            <Banner3 />

        </div>
    )
}
