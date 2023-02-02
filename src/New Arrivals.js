import React from 'react'
import Header from './Header'
import "./NewArrivals.css";
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";
import Product from './Product';
import Footer from './Footer';
function NewArrivals() {
  return (
    <div >
        <Header/>
        <div className='heade' >
           <p1 className='we'><b>
           <marquee width="40%" direction="left to right" height="30%">
           END OF SEASON SALE - FLAT 40% OFF
    </marquee>
<br/>
<br/></b>
<Link to='/Womens' className='w'>
  <b> SHOP NOW </b> 
</Link>
</p1> 
</div>
<div className='q'>
                <Link to='/'>
                   <b className='h'> Home</b>
                </Link>. New Arrivals
               <h1 className='po'> NEW ARRIVALS</h1>
               <hr/>
                <br/>
            
               <TuneIcon/>
            <select id="Womens1"  className='sat1'>
                <option value=" Running Shoes"> Footwear</option>
                <option value="    Walking Shoes">    Apparel</option>
                <option value="  Training & Gym Shoes">  Accessories</option>
              

            </select>
          
            <span >
            
            <select id="Shoes"  className='shoes1'>
            
                <option value=" Running Shoes"> Product Type Filter</option>
                <option value="    Walking Shoes">  Bags - Backpacks  </option>
                <option value="  Training & Gym Shoes">  Bags - Casual</option>
                <option value="T-Shirt & Tops">Bags - Gym</option>
                <option value="Jacket">Ball</option>
                <option value="Jacket">Bat</option>
                <option value="Jacket">Beanies</option>
                <option value="Jacket">Caps</option>
                <option value="Jacket">Casual Shoe</option>
            </select>
            </span>
            <span >
            
            <select id="Shoes"  className='shoes1'>
            
                <option value=" Running Shoes">Price </option>
                <option value="    Walking Shoes">  <input type='radio'/> Less than 1,000 </option>
                <option value="    Walking Shoes">   1,000 - 3,000  </option>
                <option value="    Walking Shoes">  3,000 - 5,000   </option>
                <option value="    Walking Shoes">  7,000 - 9,000   </option>
                <option value="    Walking Shoes">   more than 9,000  </option>
            </select>
            </span>
            <span >
            
            <select id="Shoes"  className='shoes1'>
            <option value="T-Shirt & Tops"><b>Gender</b></option>
                <option value=" Running Shoes"> Femals</option>
                <option value="    Walking Shoes">    Girls</option>
                <option value="  Training & Gym Shoes">  Male</option>
                <option value="T-Shirt & Tops">Unisex</option>
                
               
            </select>
            </span>
            <span >
            
            <select id="Shoes"  className='shoes1'>
            
                <option value=" Running Shoes"> color</option>
                <option value="    Walking Shoes">    red</option>
                <option value="  Training & Gym Shoes">  Yellow</option>
                <option value="T-Shirt & Tops">Green</option>
                <option value="Jacket">white</option>
               
            </select>
            </span>
            <span >
            
            <select id="Shoes"  className='shoes1'>
            
                <option value=" Running Shoes"> Winters</option>
                <option value="    Walking Shoes">    Walking Shoes</option>
                <option value="  Training & Gym Shoes">  Training & Gym Shoes</option>
                <option value="T-Shirt & Tops">T-Shirt & Tops</option>
                <option value="Jacket">Jacket</option>
               
            </select>
            </span>
          
<Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/612UzgvA0eL._AC_UL480_FMwebp_QL65_.jpg'
            id="1"
            title='Mens Supreme Comfort - Everglide Range Walking Shoe'
            discount={2500}
            price={1699}
          />
            <hr></hr>
          <Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71pqF-kyG0L._AC_UL480_FMwebp_QL65_.jpg'
            id="2"
            title="Unisex-Adult Cap Black"
            discount={3200}
            price={2399.0}
          />
        </div>

        <div className="home__row">
        <hr></hr>
          <Product
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51oNo6gRyHL._AC_UL480_FMwebp_QL65_.jpg'
            id="3"
            title="Mens Maximal Comfort-everglide Range Walking Shoe"
            discount={2200}
            price={1999.99}
          />
            <hr></hr>
          <Product
        
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/714rzwmm3xL._AC_UL480_FMwebp_QL65_.jpg"
            id="4"
            title="Unisex-Adult X-Ray 2 Square Puma Black-Puma White-Gray Violet-Future"
            discount={2200}
            price={1799.99}

            
          />
          <hr></hr>
          <Product
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61ldAiCTxZL._AC_UL480_FMwebp_QL65_.jpg"
            id="5"
            title="Mens Knit V3 Walking Shoe"
            discount={2200}
            price={1094.98}
          />
            <hr></hr>
        </div>

        <div className="home__row">
          <Product
            
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/517NUpFyEbL._AC_UL480_FMwebp_QL65_.jpg"
            id="6"
            title="Mens Supreme Comfort - Everglide Range Walking Shoe"
            discount={2200}
            price={2094.98}
          />
          
        </div>
      <Footer/>
</div>
            

  )
}

export default NewArrivals