import React from 'react'
import Camp from './Camp';
import Checkout from './Checkout';
import Footer from './Footer';
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";

function Dashboard() {
    return (
        <div>
            <Header />
            <Home />
            <Product />
            <Footer/>
            

        </div>
    )
}

export default Dashboard