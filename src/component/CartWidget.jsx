import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = ({ cartAmmount }) => {
  return <Link to={'/cart'}>
                <div className='cartlogo-container'>
                    <img src={'https://i.postimg.cc/Y9LJ8xHS/carrito.png'} alt="Logo carrito de compras blanco" />
                    <h4>{cartAmmount}</h4>
                </div>
         </Link>
}

export default CartWidget
