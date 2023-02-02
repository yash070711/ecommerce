import React from 'react'
import Header from './Header'
import "./NewArrivals.css";
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";
import Prt1 from './Prt1';
import "./Mens.css";
import Footer from './Footer';
function Mens() {
  return (
    <div >
        <Header/>
        <div className='heade' >
           <p1 className='we'><b>
           <marquee width="40%" height="30%">
           END OF SEASON SALE - FLAT 40% OFF Holiday Edition | 
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
                </Link>.Mens
               <h1> Mens</h1>
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
          
</div>
            
            <div className="home__row">
        <hr></hr>
        <h1 className='p'>Products</h1>
          <Prt1
           
            image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/386919/02/sv01/fnd/IND/fmt/png/Comp-Men'
            id="12321341"
            title='Mens Supreme Comfort - Everglide Range Walking Shoe'
            discount={2500}
            price={1699}
          />
            <hr></hr>
          <Prt1
           
            image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/384959/02/sv01/fnd/IND/fmt/png/TRC-Blaze-Triple-Men'
            id="49538094"
            title="Unisex-Adult Cap Black"
            discount={3200}
            price={2399.0}
          />
        </div>

        <div className="home__row">
        <hr></hr>
          <Prt1
           
            image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/194887/01/sv01/fnd/IND/fmt/png/Zeta-Men'
            id="4903850"
            title="Mens Maximal Comfort-everglide Range Walking Shoe"
            discount={2200}
            price={1999.99}
          />
            <hr></hr>
          <Prt1
        
            image=" https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/191671/08/sv01/fnd/IND/fmt/png/Modern-Runner-Unisex-Sneakers"
            id="4903850"
            title="Unisex-Adult X-Ray 2 Square Puma Black-Puma White-Gray Violet-Future"
            discount={2200}
            price={1799.99}

            
          />
          <hr></hr>
          <Prt1
            image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/194883/02/sv01/fnd/IND/fmt/png/Robust-Running-Shoes'
            id="90829332"
            title="Mens Knit V3 Walking Shoe"
            discount={2200}
            price={1094.98}
          />
            <hr></hr>
        </div>

        <div className="home__row">
          <Prt1
            image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/194883/01/sv01/fnd/IND/fmt/png/Robust-Running-Shoes'
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

export default Mens