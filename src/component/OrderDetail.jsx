import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import { database } from '../firebase'
import Loading from './Loading'
import OrderDetailItem from './OrderDetailItem'

import { ThemeContext } from './ThemeContext'

const OrderDetail = () => {
  const { id } = useParams()
  const [spinner, setSpinner] = useState(false)
  const [order, setOrder] = useState({})
  const [items, setItems] = useState([])
  const [buyer, setBuyer] = useState()

  const conditionitems = items !== undefined
  const conditionbuyer = buyer !== undefined

  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'orderDetail-dark' : 'orderDetail'

  useEffect(() => {
    setSpinner(true)
    const db = database

    const orderbyid = doc(db, 'orders', id)
    getDoc(orderbyid).then((snapshot) => {
      if (snapshot.exists()) { setOrder({ id: snapshot.id, ...snapshot.data() }) }
    })
      .catch(error => { console.log(error) })
      .finally(() => { setSpinner(false) })
  }
  , [id])

  useEffect(() => {
    setItems(order.items)
    setBuyer(order.buyer)
  }, [order])

  return (
    spinner
      ? <Loading/>
      : <article className={themecondition}>
        <h2>Tu orden de Compra y tus datos son:</h2>
        {conditionitems
          ? Object.keys(items).map((key, index) => {
            return <OrderDetailItem key={index} items={items[key]}/>
          })
          : <h4>No encontramos tu orden. Porfavor itentalo denuevo</h4>
        }
        {conditionbuyer
          ? <>
        <section className='orderDetailCard'>
        <p>{buyer.tel}</p>
        <p>{buyer.email}</p>
        <p>{buyer.firstName}</p>
        </section>
        <Link className={'button'} to={'/'}>Volver al inicio</Link>
        </>
          : <>
        <h4>No se econtraron tus datos. Porfavor vuelve a intentarlo</h4>
        <Link className={'button'} to={'/'}>Volver al inicio</Link>
        </>

        }
    </article>
  )
}

export default OrderDetail
