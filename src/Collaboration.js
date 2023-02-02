import React from 'react'
import Header from './Header'
import "./Collaboration.css";
import { Link } from "react-router-dom";
import Footer from './Footer';
function Collaboration() {
  return (
    <div>
        <Header/>
        <Link to='/Womens'>
        <img
        className='im1'
        
            src='https://thumbs.dreamstime.com/b/puma-leather-black-men-s-sneakers-boots-shoes-wooden-background-banner-copy-space-kiev-ukraine-february-207584923.jpg' />
             </Link>
             <Link to='/NewArrivals'>
              <img
        className='im1'
            src='https://thumbs.dreamstime.com/b/sporty-woman-running-grey-wall-background-wearing-sportswear-sport-fitness-motivation-banner-sporty-woman-running-251464912.jpg' />
              </Link>
                <Link to='/Mens'>
              <img
        className='im1'
            src='https://thumbs.dreamstime.com/b/sole-puma-leather-black-men-s-shoes-sneakers-boots-wooden-background-fashion-concept-kiev-ukraine-february-237411134.jpg' />
            </Link>
   <Footer/>
    </div>
  )
}

export default Collaboration