import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer1'>
       
        <p1 > <hr/><b className='supo'><u> Support</u></b></p1>
        <br/>
        
        <span className='ddh'>
        <Link to='/'>
            <p2 className='soot'>Contact us</p2>
        </Link>
        <br/>
        <Link to='/'>
            <p3 className='soot'>Promotions & Sale</p3>
        </Link>
        <br/>
        <Link to='/'>
            <p4 className='soot'>FAQs</p4>
        </Link>
        <br/>
        <Link to='/'>
            <p5 className='soot'>My Account</p5>
        </Link>
        <br/>
        <Link to='/'>
            <p6 className='soot'>Terms & Conditions</p6>
        </Link>
        <br/>
        </span>
        <div>
      
        <Link to='/'>
            <p7  className='supo2'>Return Policy</p7>
        </Link>
        <br/>
        <Link to='/'>
            <p8  className='supo2'>Privacy Policy</p8>
        </Link>
        </div>
        <Link to='/'>
       <span className='loh'>
        <img
        className='imh'
        src='data:image/png;base64,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'/>

       </span>
       </Link>
       <hr/>
       <span className='ions'>
       <FacebookIcon/>
       </span>
       <span className='ions1'>
       <TwitterIcon/>
       </span>
       <span className='ions2'>
       <InstagramIcon/>
       </span>
       <span className='ions3'>
       <PinterestIcon/>
       </span>
       <span className='ions4'>
       <YouTubeIcon/>
       </span>
       <span >
        <p10 className='vty'>© PUMA India Ltd, 2022. All Rights Reserved
</p10>
       </span>
       <span className='paymen' >
            <img 
            className='ing'
            src='https://in.puma.com/assets/paymentLogos/visa.svg'/>
             <img 
            className='ing1'
            src='https://in.puma.com/assets/paymentLogos/master.svg'/>
             <img 
            className='ing2'
            src='https://in.puma.com/assets/paymentLogos/maestro.svg'/>
             <img 
            className='ing3'
            src='https://in.puma.com/assets/paymentLogos/americanexpress.svg'/>
       </span>
    </div>
  )
}

export default Footer


