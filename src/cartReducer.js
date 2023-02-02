const initialState={
    cart:[]
}

export const getTotal=(cart) =>{
    return (
        cart.reduce((amount,item) =>parseInt (item.price)+amount,0
    ) )
}
/*export function shipping(getTotal,cart){
    if(getTotal>2000){
        cart.reduce((amount,item) =>parseInt (item.price)+amount+500)
    }
}*/

export function cartReducer( state=initialState,action) {
    console.log({action})
    switch(action.type){
        case "Add_item_To_Cart":
        return {
            ...state,cart :[...state.cart,action.item]

        }
        case "Remove item from cart" :
            const index= state.cart.findIndex((cartItem) =>cartItem.id===action.id )
            let newCart =[...state.cart]
            if(index >=0){
                newCart.splice(index,1)
            }
            else{
                console.log("can not delete")
            }
            return{
                ...state,cart:newCart
            }
    
    default:
        return state

}
}

export default cartReducer