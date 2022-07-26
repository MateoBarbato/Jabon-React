import { React, useState, useEffect, createContext } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([])
  const [cartAmmount, setCartAmmount] = useState(0)
  const [totalprice, setTotalprice] = useState(0)

  useEffect(() => {
    let cantidad = 0
    let precio = 0
    itemsCart.forEach((element) => {
      cantidad = cantidad + element.ammount
    })
    itemsCart.forEach((element) => {
      precio = precio + element.precio * element.ammount
    })

    setCartAmmount(cantidad)
    setTotalprice(precio)
  }, [itemsCart])

  function checkitems() {
    return console.log(itemsCart)
  }

  function addItem(item, ammount) {
    item.ammount = ammount
    const newItemsCart = [...itemsCart, item]
    setItemsCart(newItemsCart)
  }

  function addItemRepeated(item, ammountofitems) {
    const itemtoedit = itemsCart.find((itemarr) => itemarr.id === item.id)
    const prevammount = itemtoedit.ammount
    itemtoedit.ammount =
      prevammount + ammountofitems > item.stock
        ? item.stock
        : prevammount + ammountofitems
    const arrayfiltrado = itemsCart.filter((itemarr) => itemarr.id !== item.id)
    setItemsCart([...arrayfiltrado, itemtoedit])
  }

  function clear() {
    setItemsCart([])
  }

  function removeItem(itemid) {
    const arraynuevo = itemsCart.filter((item) => item.id !== itemid)

    setItemsCart(arraynuevo)
  }

  function isInCart(id) {
    if (itemsCart.find((item) => item.id === id) === undefined) {
      return true
    } else {
      return false
    }
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        clear,
        checkitems,
        removeItem,
        isInCart,
        addItemRepeated,
        itemsCart,
        cartAmmount,
        totalprice,
        setTotalprice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
