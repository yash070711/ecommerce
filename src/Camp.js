import React from 'react'
import Header from './Header'
import './Camp.css'
function Camp() {
  return (
    <div>
    <Header/>
    <form>
    <div className='g21'>
    <img

    className='kw'
    src='https://partner.jal.co.jp/image.jsp?emile/shop/010815_i.jpg'/>
    <br/>
    <h1 className='kmp1'>Item name<br/><input type='text' placeholder='Item' className='b311'></input></h1><br/>
    <h3 className='kmp2'>Size<input type='text' placeholder='Size' className='b311'></input></h3><br/>
    <h4 className='kmp3'>No of items<input type='text' placeholder='No of items' className='b311'></input></h4>
    <button className='gg'>Proceed to Checkout</button>
    </div>
    </form>
    </div>
  )
}

export default Camp