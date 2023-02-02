export function addtocart({id, title, image, price, discount})
{ console.log({title})
    return{
        type:"Add_item_To_Cart",
        item:{
            id:id,
            title :title,
            image:image, 
            price: price,
            discount:discount,
        }
    }
}
export function removefromcart(id){
    return{
        type:"remove from  cart",
        id:id
    }
}