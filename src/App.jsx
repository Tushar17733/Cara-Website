import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

import './home.css'
import './mystyles.css'
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import MainFooter from './components/MainFooter';
import Productlist from './components/Productlist';
import Productlist2 from './components/Productlist2';
import Productlist3 from './components/Productlist3';
import Productlist4 from './components/Productlist4';
import Productlist5 from './components/Productlist5';
import Productlist6 from './components/Productlist6';
import Productlist7 from './components/Productlist7';
import Productlist8 from './components/Productlist8';
import Productlist9 from './components/Productlist9';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {

  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          {/* Home route with nested child routes */}
          <Route path="/" element={<Home />}>
            <Route index element={<Productlist />} /> 
            <Route path="men-clothing" element={<Productlist />} />
            <Route path="women-clothing" element={<Productlist2 />} />
            <Route path="kid-clothing" element={<Productlist3 />} />
            <Route path="active-clothing" element={<Productlist4 />} />
            <Route path="ethnics" element={<Productlist5 />} />
            <Route path="formals" element={<Productlist6 />} />
            <Route path="casuals" element={<Productlist7 />} />
            <Route path="winter-clothing" element={<Productlist8 />} />
            <Route path="shoes" element={<Productlist9 />} />
          </Route>

          {/* Other standalone routes */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <MainFooter />
      </Router>
    </div>
  )
}

export default App
