import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{

const [itemsCart,setItemsCart] = useState([]);


function ammountitems(){
    var cantidaditems=itemsCart.length
    return cantidaditems;
}

function addItem(item,ammount){
    item.ammount = ammount;
    var newItemsCart = [...itemsCart,item]
    setItemsCart(newItemsCart)
}   

function clear () {
    setItemsCart([])    
    console.log(itemsCart)
}

function removeItem (itemid) {
    var arraynuevo = itemsCart.filter((item)=>item.id !== itemid )

    setItemsCart(arraynuevo)

}

function isInCart (id) {
     
    if(itemsCart.find(item=>item.id === id)===undefined){
        return true
    }else {
        return false
    }
    
}

    return(
        <CartContext.Provider value={{addItem,clear,removeItem,isInCart,itemsCart}}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider