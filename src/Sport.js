import React from 'react'
import Header from './Header'
import "./Sport.css";
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";
import Footer from './Footer';
function Sport() {
  return (
    <div>
        <Header/>
        <div className='heade' >
           <p1 className='we'><b>
           <marquee width="40%" direction="left to right" height="30%">
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
                </Link>. Sport
               <h1> Products</h1>
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
<div>
    <h1 className='q1'>CATS ON THE PITCH</h1>
    <img 
    className='mi1'
    src='https://cdn.sanity.io/images/qa41whrn/prod/b0e0acce43a3e79c0f6dd0d669a414f45ddf4143-1536x1536.jpg?w=1440&q=75&auto=format'/>
 
    
    <img 
    className='mi1'
    src='https://cdn.sanity.io/images/qa41whrn/prod/35e84eb35a0851e5e23ad5b47f0ce1fda53d6b83-1536x1536.jpg?w=1440&q=75&auto=format'/>
    
    
    <img 
    className='mi1'
    src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/536208/01/mod01/fnd/IND/fmt/png/Dylan-Basketball-Men'/>
    
    <img 
    className='mi1'
    src='https://cdn.sanity.io/images/qa41whrn/prod/eb36a65e40e5b023959ce0094d195070b713248d-1536x1536.jpg?w=1440&q=75&auto=format'/>
  
    
    <img 
    className='mi1'
    src='https://cdn.sanity.io/images/qa41whrn/prod/a95e6ee377ed3ea2db8e6a7f4e76e45f7d185072-1536x1536.jpg?w=1440&q=75&auto=format'/>
    
   
</div>
<Link to='/'>
<div className='mi2'>
    <h1 >
<marquee  className='c1' scrollamount='20' direction="left" height="30%">
PLAY HARD, SLAY HARDER EXPLORE CRICKET COLLECTION
    </marquee></h1>
   </div> 
   </Link>
<div>
    <h1 className='c2'>PICK YOUR KICKS</h1>
    <img
     className='e1'
    src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/605994/01/mod01/fnd/IND/fmt/png/PUMA-x-Royal-Challengers-Bangalore-Graphic--Men'/>
   
   <button className='k1'>Shop Now</button>
    <img
     className='e1'
src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/605992/01/mod01/fnd/IND/fmt/png/PUMA-x-Royal-Challengers-Bangalore-Graphic-Men'/>
         <button className='k1'>Shop Now</button>
       <img
       className='e1'
       src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/605993/02/mod01/fnd/IND/fmt/png/PUMA-x-Royal-Challengers-Bangalore-AOP-Men'/>
       <button className='k1'>Shop Now</button>
</div>
<Footer/>
    </div>
  )
}

export default Sport