import React from "react";
import "./Product.css";
import{useDispatch} from 'react-redux';


function Product({  id,title, image, price, discount}) {
 
  const dispatch=useDispatch()
  function jacob(){
    alert("your item in cart");
  }
  return (
    <div className="product">

      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <b>Sale price ₹</b> 
          <strong>{price}</strong> 
        </p>Price
        <s> {discount}</s>
        <button  className="black" onClick= {() => dispatch( {     type:"Add_item_To_Cart",
        item:{
              id:id,
            title :title,
            image:image, 
            price: price,
            discount:discount,}},jacob())} ><b>SHOP NOW</b></button>

    
</div>

      
      </div>
  
  );
}

export default Product;