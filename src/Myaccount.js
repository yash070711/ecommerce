import React from 'react'
import Footer from './Footer';
import Header from './Header'
import "./Myaccount.css";
function Myaccount() {
  return (
    <div classname='account'>
        <Header/>
        <h1 className='h'><b>My Account</b></h1>
        <form className='f1'>
            <h2><u><b>Login / Register</b></u></h2>
            <hr/>
            <br/>
            <p1><b>Phone <p4 className='o'>*</p4> </b><br/>
            <tr>
              <th className='t' > <input type='text' placeholder='+91' className='g2311' required></input></th> 
              </tr>  <br/>
                <button className='b1' >GET OTP</button>
                </p1>
                <br/>
                An OTP will be sent to your mobile number for verification
        </form>
        <hr/>
        <div className='th'>
        <h3 ><u><b>Check Order / Initiate return</b></u></h3>
See your order even if you are not a registered user. Enter 
<br/>the order number and the billing address ZIP code
<br/>
<br/>
<br/>
<b className='t1'>ORDER NUMBER</b><p4 className='o'>*</p4>
<br/>
<input type='text' className='n4' placeholder='ORDER NUMBER' required></input><br/>
<b>Phone</b> <p4 className='o'>*</p4>
<br/>
<input type='text' className='n2' placeholder='+91' required>
</input><br/>
<button className='t2' ><b> CHECKORDER/Initiate return</b></button>
</div>
<Footer/>
    </div>

  )
  
}

export default Myaccount