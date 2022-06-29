import { useState,useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children})=>{

const [itemsCart,setItemsCart] = useState([]);
const [cartAmmount,setCartAmmount] = useState(0)

        useEffect (() => {
            var cantidad = 0;
            console.log('cambio itemscart')
            
            itemsCart.forEach(element => {
                cantidad = cantidad+element.ammount
            });

            setCartAmmount(cantidad)
        }, [itemsCart])


// function ammountitems(){
//     var cantidaditems=itemsCart.length
//     setCartAmmount(cantidaditems)
// }

function checkitems(){
   return console.log(itemsCart)
}

function addItem(item,ammount){
    item.ammount = ammount;
    var newItemsCart = [...itemsCart,item]
    setItemsCart(newItemsCart)
}   

function addItemRepeated(item,ammount){
    var itemtoedit = itemsCart.find(itemarr=>itemarr.id===item.id)
    var prevammount = item.ammount;
    itemtoedit.ammount = ammount+prevammount
    var arraynuevo = itemsCart.filter((item)=>item.id !== item.id )
    
    
    setItemsCart([...arraynuevo,itemtoedit])

    
}

function clear () {
    setItemsCart([])    
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
        <CartContext.Provider value={{addItem,clear,checkitems,removeItem,isInCart,addItemRepeated,itemsCart,cartAmmount}}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContextProvider