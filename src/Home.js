import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
     src='https://www.313somerset.com.sg/4a046f/siteassets/313-somerset/tenant-logo-and-banner-images/puma-logo-1000.jpg' alt='image' />
    
            <span className="heading">
                <h1>TOP & TRENDING</h1>
            </span>
        <div className="home__row">
        <hr></hr>
          <Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/612UzgvA0eL._AC_UL480_FMwebp_QL65_.jpg'
            id="12321341"
            title='Mens Supreme Comfort - Everglide Range Walking Shoe'
            discount={2500}
            price={1699}
            button
          />
            <hr></hr>
          <Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71pqF-kyG0L._AC_UL480_FMwebp_QL65_.jpg'
            id="49538094"
            title="Unisex-Adult Cap Black"
            discount={3200}
            price={2399.0}
          />
        </div>

        <div className="home__row">
        <hr></hr>
          <Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51oNo6gRyHL._AC_UL480_FMwebp_QL65_.jpg'
            id="4903850"
            title="Mens Maximal Comfort-everglide Range Walking Shoe"
            discount={2200}
            price={1999.99}
          />
            <hr></hr>
          <Product
        
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/714rzwmm3xL._AC_UL480_FMwebp_QL65_.jpg"
            id="4903850"
            title="Unisex-Adult X-Ray 2 Square Puma Black-Puma White-Gray Violet-Future"
            discount={2200}
            price={1799.99}

            
          />
          <hr></hr>
          <Product
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61ldAiCTxZL._AC_UL480_FMwebp_QL65_.jpg"
            id="90829332"
            title="Mens Knit V3 Walking Shoe"
            discount={2200}
            price={1094.98}
          />
            <hr></hr>
        </div>

        <div className="home__row">
          <Product
            
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/517NUpFyEbL._AC_UL480_FMwebp_QL65_.jpg"
            id="90829332"
            title="Mens Supreme Comfort - Everglide Range Walking Shoe"
            discount={2200}
            price={2094.98}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;