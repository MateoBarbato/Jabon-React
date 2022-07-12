import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'

import { ThemeContext } from './ThemeContext'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'

import CartForm from './CartForm'
import OrderID from './OrderID'
import { collection, addDoc } from 'firebase/firestore'
import { database } from '../firebase'

const Cart = () => {
  const [form, setForm] = useState(true)
  const [itemid, setItemid] = useState('Id no encontrado')

  const { clear, itemsCart, totalprice } = useContext(CartContext)
  const condition = itemsCart.length === 0

  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'cartContainerBackground-black' : 'cartContainerBackground'

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
      .then(({ id }) => setItemid(id))
      .catch('Hubo un error en el añadir un nuevo producto')
      .finally(() => {
        setForm(false)
      })
    // console.log({buyer:{...data},items:{...itemsCart},datetime,total})
  }

  return <>

{condition
  ? <EmptyCart/>
  : form
    ? <div className={themecondition}>
<article className='cartContainer'>

{itemsCart.map(item => <ItemCart key={item.id} item={item}/>)}

<section className='cartInfo'>
    <div className="cartPrice">
        <p>Precio total:{totalprice}</p>
    </div>
    <div className='buttonClear'>
        <button onClick={clear} className='button'>Borrar Todo</button>
    </div>
</section>
<CartForm onSubmit={onSubmitCart}/>
</article>
</div>
    : <OrderID key={itemid} id={itemid}/>
}

{/* {form
?<div className={themecondition}>
<article className='cartContainer'>

{itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}

<section className='cartInfo'>
    <div className="cartPrice">
        <p>Precio total:{totalprice}</p>
    </div>
    <div className='buttonClear'>
        <button onClick={clear} className='button'>Borrar Todo</button>
    </div>
</section>
<CartForm onSubmit={onSubmitCart}/>
</article>
</div>
:<OrderID key={itemid} id={itemid}/>} */}

</>
}

export default Cart
