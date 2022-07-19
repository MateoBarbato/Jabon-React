import React, { useContext } from 'react'
import CartForm from './CartForm'
import ItemCart from './ItemCart'
import { ThemeContext } from './ThemeContext'
import { CartContext } from './CartContext'

const Cart = ({ onSubmit }) => {
  const { theme } = useContext(ThemeContext)
  const { clear, itemsCart, totalprice } = useContext(CartContext)
  const themecondition = theme ? 'cartContainerBackground-black' : 'cartContainerBackground'

  return <div className={themecondition}>
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
    <CartForm onSubmit={onSubmit}/>
    </article>
    </div>
}
export default Cart
