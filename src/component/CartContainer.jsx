/* eslint-disable */
import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'
import EmptyCart from './EmptyCart'
import OrderID from './OrderID'
import { collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { database } from '../firebase'
import Cart from './Cart'

const CartContainer = () => {
  const [order,setOrder] = useState(false)
  const [orderId, setOrderId] = useState('Id no encontrado')
  const { clear, itemsCart, totalprice } = useContext(CartContext)
  const emptycart = itemsCart.length === 0

  const onSubmitCart = (data) => {
    const db = database
    const total = totalprice
    const currentdate = new Date()
    const datetime = currentdate.getDate() + '/' +
        (currentdate.getMonth() + 1) + '/' +
        currentdate.getFullYear() + ' @ ' +
        currentdate.getHours() + ':' +
        currentdate.getMinutes() + ':' +
        currentdate.getSeconds()
    const order = {
      buyer: { ...data },
      items: { ...itemsCart },
      datetime,
      total
    }
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .catch('Hubo un error en el añadir un nuevo producto')
      .finally(() => {
        setOrder(true)
        clear()
      })
    itemsCart.forEach(itemOnCart => {
        const itemsDoc = doc(db,'items',itemOnCart.id)
        const stockUpdate = {stock: itemOnCart.stock - itemOnCart.ammount}
        updateDoc(itemsDoc,stockUpdate)
        
         
      });
    
  }

  return <>
  {order ? <OrderID key={orderId} id={orderId}/>
  : emptycart ? <EmptyCart/>
  : <Cart onSubmit={onSubmitCart} />
 
}
</>
}



export default CartContainer
