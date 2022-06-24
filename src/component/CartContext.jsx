import { useState } from "react";
import { createContext } from "react";

const CartContext = React.createContext();

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