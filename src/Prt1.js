import "./Prt1.css";
import React from "react";
import{useDispatch} from 'react-redux'

function Prt1({ id, title, image, price, discount}) {
  const dispatch=useDispatch()
  return (
    <div className="product">

      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong> 
        </p>
        <s>{discount}</s>
        

       <button className="black" onClick={() => dispatch( {     type:"Add_item_To_Cart",
        item:{
            title :title,
            image:image, 
            price: price,
            discount:discount,}})}><b>SHOP NOW</b></button>
    </div>
    </div>
  );
}

export default Prt1;