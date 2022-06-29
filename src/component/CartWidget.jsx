import React from 'react'
import cartlogo from '../carrito.png'
import { Link } from 'react-router-dom'
import {CartContext} from './CartContext'
import {useContext} from 'react'

const CartWidget = ()=>{
        // function onclickstatus (){
      const {cartAmmount} = useContext(CartContext)
        // }
      const condition = cartAmmount>0;
      return    <Link to={'/cart'}>
                <div className='cartlogo-container'>
                    <img src={cartlogo} alt="Logo carrito de compras blanco" />
                    {condition&&<h4>{cartAmmount}</h4>}
                </div>
                </Link>
}
 
export default CartWidget;