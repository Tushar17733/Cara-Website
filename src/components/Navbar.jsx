import React, { useState } from 'react'
import '../mystyles.css'
import '../home.css'
import SearchIcon from '@mui/icons-material/Search';
import Select from './Dropdown/select';
import Login from './Login';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <section className="headers">
            <Link to="/" className="no-style-link">

                <img src="/logo.png" alt="Logo" className="logo" /></Link>

            <div className="headersearch">
                <Select data={[
                    'All Categories',
                    'Men’s Clothing',
                    'Women’s Clothing',
                    'Kids’ Clothing',
                    'Activewear & Sportswear',
                    'Ethnic & Traditional Wear',
                    'Formal & Office Wear',
                    'Casual Wear',
                    'Winter & Outerwear',
                    'Shoes & Footwear'
                ]} />

                <div className="search">
                    <input type="text" placeholder="Search for items..."
                    />
                    <SearchIcon className="searchicon" />
                </div>
            </div>

            <div className="nav-links">
                <ul className="navbars">
                    {/* Home link is active for multiple child paths */}
                    <NavLink
                        to="/"
                        className="routerlinks"
                        end
                    >
                        {({ isActive }) => (
                            <li className={isActive ? "active" : ""}>Home</li>
                        )}
                    </NavLink>

                    <NavLink to="/shop" className="routerlinks">
                        {({ isActive }) => <li className={isActive ? "active" : ""}>Shop</li>}
                    </NavLink>

                    <NavLink to="/about" className="routerlinks">
                        {({ isActive }) => <li className={isActive ? "active" : ""}>About</li>}
                    </NavLink>

                    <NavLink to="/contact" className="routerlinks">
                        {({ isActive }) => <li className={isActive ? "active" : ""}>Contact</li>}
                    </NavLink>

                    <NavLink to="/cart" className="routerlinks">
                        {({ isActive }) => <li className={isActive ? "active" : ""} id="cart">

                            <span className="material-symbols-outlined">shopping_bag</span>
                        </li>}
                    </NavLink>


                </ul>
            </div>





        </section>
    );
}

