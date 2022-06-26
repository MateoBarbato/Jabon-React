import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{

const [itemsCart,setItemsCart] = useState([]);


function checkitems(){
    return console.log(itemsCart)
}

function addItem(item,ammount){
    var arraynuevo=[]
    for (let index = 0; index < ammount; index++) {
        arraynuevo = arraynuevo.concat(item)
    }
    console.log(arraynuevo)
    var newItemsCart = [...itemsCart,...arraynuevo]
    setItemsCart(newItemsCart)
    // console.log(itemsCart)
    // setItemsCart([...itemsCart,item])
    // console.log(itemsCart)
}

function clear () {
    setItemsCart([])    
    console.log(itemsCart)
}

function removeItem (itemid) {

    var arraynuevo = itemsCart.filter((item)=>item.id !== itemid )

    setItemsCart(arraynuevo)

}

// function isInCart (id) {
    
//     itemsCart.findIndex(item=>item.id === id)
//     ?true
//     :false

// }

    return(
        <CartContext.Provider value={{addItem,clear,checkitems,removeItem,itemsCart}}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider