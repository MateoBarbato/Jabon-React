import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

const CartContextProvider = ({children})=>{

const [itemsCart,SetitemsCart] = useState();

function addItem(item,quantity){
    const arraynuevo=[]
    for (let index = 0; index < quantity; index++) {
        arraynuevo = itemsCart.concat(item)
    }
    SetitemsCart(arraynuevo)
    
}

function clear () {
    SetitemsCart([])    
}

function removeItem (itemid) {

    const arraynuevo = itemsCart.filter((item)=>{item.id !== itemid })

    SetitemsCart(arraynuevo)

}

function isInCart (id) {
    
    itemsCart.findIndex(item=>item.id == id)
    ?true
    :false

}

    return(
        <CartContext.Provider value={{addItem,clear,removeItem,isInCart}}>
            {children}
        </CartContext.Provider>
    )

}