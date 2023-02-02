import React from 'react'
import Header from './Header'
import "./Womens.css";
import TuneIcon from '@mui/icons-material/Tune';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Prt1 from "./Prt1";
import { Link } from "react-router-dom";
import Footer from './Footer';
function Womens() {

    return (
        <div className='wom'>
            <Header />
            <Link to='/'>
                   <b className='h'> Home</b>
                </Link>.Womens
               
               <h1> Womens</h1>
                <br/>
            <hr/>
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
                <option value="    Walking Shoes">    <RadioButtonUncheckedIcon/> red</option>
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
            <div >
                <img 
                classname='img'
                src='https://cdn.dribbble.com/users/6545543/screenshots/15944835/puma_banner_dribble_4x.png' alt='img' />
            </div>
            <div className="home__row">
        <hr></hr>
          <Prt1
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81zaB-R0WgL._AC_UL480_FMwebp_QL65_.jpg'
            id="12321341"
            title='Mens Supreme Comfort - Everglide Range Walking Shoe'
            discount={2500}
            price={1699}
          />
            <hr></hr>
          <Prt1
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Dcp1J6z+L._AC_UL480_FMwebp_QL65_.jpg'
            id="49538094"
            title="Unisex-Adult Cap Black"
            discount={3200}
            price={2399.0}
          />
        </div>

        <div className="home__row">
        <hr></hr>
          <Prt1
           
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71GRPIfqutL._AC_UL480_FMwebp_QL65_.jpg'
            id="4903850"
            title="Mens Maximal Comfort-everglide Range Walking Shoe"
            discount={2200}
            price={1999.99}
          />
            <hr></hr>
          <Prt1
        
            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51ygkzIWrGL._AC_UL480_FMwebp_QL65_.jpg"
            id="4903850"
            title="Unisex-Adult X-Ray 2 Square Puma Black-Puma White-Gray Violet-Future"
            discount={2200}
            price={1799.99}

            
          />
          <hr></hr>
          <Prt1
            image='https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61rNZyF1W-L._AC_UL480_FMwebp_QL65_.jpg'
            id="90829332"
            title="Mens Knit V3 Walking Shoe"
            discount={2200}
            price={1094.98}
          />
            <hr></hr>
        </div>

        <div className="home__row">
          <Prt1
            
            image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/376952/01/sv01/fnd/IND/fmt/png/Feline-Profoam-Safari-Glam-Running-Shoes-Women"
            id="90829332"
            title="Mens Supreme Comfort - Everglide Range Walking Shoe"
            discount={2200}
            price={2094.98}
          />
          
        </div>
        <Footer/>
      </div>

    
    )
}

export default Womens