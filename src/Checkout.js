import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removefromcart } from './cartAction'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Checkout.css";
import Subtotal from './Subtotal'
function Checkout() {
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