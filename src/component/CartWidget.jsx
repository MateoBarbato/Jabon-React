import React from 'react'
import cartlogo from '../assets/carrito.png'
import { Link } from 'react-router-dom'

const CartWidget = ({ cartAmmount }) => {
  return <Link to={'/cart'}>
                <div className='cartlogo-container'>
                    <img src={cartlogo} alt="Logo carrito de compras blanco" />
                    <h4>{cartAmmount}</h4>
                </div>
                </Link>
}

export default CartWidget
