import React from 'react'
import { useSelector } from 'react-redux'
import { getTotal } from './cartReducer'
import { shipping } from './cartReducer'
import "./Subtotal.css"
function Subtotal() {
    const cart=useSelector(state => state.cart)
  return (
    <div className='subtotal'>
        <div className='subtotal_area'>
            <p className='sub'>Subtotal ({cart.cart.length} Products) Price <b1 className='defd1'>₹:{getTotal(cart.cart)} </b1></p>
            <p> SHIPPING COSTS  :<b2 className='defd2'>        ₹ 50 </b2></p>
            <hr/>
            {/* {getTotal(cart.cat)>1700 ?getTotal(cart.car)+50 :getTotal(cart.cart)} */}

            <p> <b>GRAND TOTALPRICES</b> INCLUDE GST <b3 className='defd3'>₹:{getTotal(cart.cart)+50} </b3>   </p>
            <button  className='byg' >Proceed to checkout</button>

        </div>

    </div>
  )
}

export default Subtotal
