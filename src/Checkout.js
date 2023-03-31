import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removefromcart } from './cartAction'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Checkout.css";
import Subtotal from './Subtotal'
function Checkout({  id,title, image, price, discount}) {
    const cart = useSelector(state => state.cart)
    const dispatch =useDispatch()
    return (
        <div>
            <Header />
            <div className='checkout'>
                <div className='checkout_item'>
                    {cart.cart.map(item => {
                        return (
                        <div className='checkout_products'>
                            <grid><img 
                             className='sona'
                            src={item.image}></img></grid>
                            <div className='product_info'>
                                <h4>{item.title}
                                    </h4>
                                    <p> Price ₹ : {item.price} </p>
     
                                    <div className="product">



</div>
<div>
<button  className="black" onClick= {() => dispatch( {     type:"Add_item_To_Cart",
        item:{
              id:id,
            title :title,
            image:image, 
            price: price,
            discount:discount,}})} ><b>+</b></button>
    
</div>
                                    <button className='bno' onClick={() => dispatch( {
                                          type:"Remove item from cart",
                                          
                                          id:  item.id
                                    })}
        ><DeleteIcon/></button>
        <hr/>
                            </div>      
                            </div>
                    )
                }
                    )}
            </div>
           
            <div className='subtotal'>
            <grid><Subtotal/></grid>   

            </div>
            
        </div>

                <Footer />
            </div>
            )
}

            export default Checkout