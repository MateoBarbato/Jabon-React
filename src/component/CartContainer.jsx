/* eslint-disable */
import React, { useContext, useState } from 'react'
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  writeBatch,
} from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { database } from '../firebase'
import { CartContext } from './Context/CartContext'
import EmptyCart from './EmptyCart'
import OrderID from './OrderID'
import Cart from './Cart'

const CartContainer = () => {
  const [order, setOrder] = useState(false)
  const [orderId, setOrderId] = useState('Id no encontrado')
  const { clear, itemsCart, totalprice } = useContext(CartContext)
  const emptycart = itemsCart.length === 0
  const MySwal = withReactContent(Swal)

  const SaveOrder = (itemsCart, data) => {
    const batch = writeBatch(database)
    const outOfStock = []
    const total = totalprice
    const currentdate = new Date()
    const datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds()
    const order = {
      buyer: { ...data },
      items: { ...itemsCart },
      datetime,
      total,
    }

    itemsCart.forEach((productoEnCart) => {
      getDoc(doc(database, 'items', productoEnCart.id)).then(async (documentSnapshot) => {
        const producto = {
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        }

        if (producto.stock >= productoEnCart.ammount) {
          batch.update(doc(database, 'items', producto.id), {
            stock: producto.stock - productoEnCart.ammount,
          })
        } else {
          outOfStock.push(producto)
        }
      })
    })

    if (outOfStock.length === 0) {
      addDoc(collection(database, 'orders'), order)
        .then(({ id }) => {
          setOrderId(id)
          batch.commit().then(() => {
            MySwal.fire({
              title: <strong>Gracias por tu Compra!</strong>,
              html: <i>{`Orden guardada con id: ${id}`}</i>,
              icon: 'success',
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setOrder(true)
          clear()
        })
    } else {
      let mensaje = ''
      for (const producto of outOfStock) {
        mensaje += `${producto.title}`
      }
      console.log(`No hay stock suficiente para los siguientes productos: ${mensaje}`)
    }
  }

  const onSubmitCart = (data) => {
    SaveOrder(itemsCart, data)
  }

  return (
    <>
      {order ? (
        <OrderID key={orderId} id={orderId} />
      ) : emptycart ? (
        <EmptyCart />
      ) : (
        <Cart onSubmit={onSubmitCart} />
      )}
    </>
  )
}

export default CartContainer
