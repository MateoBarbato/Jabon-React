import React from 'react'
import cartlogo from '../carrito.png'

const CartWidget = ()=>{
      return    <div className='cartlogo-container'>
                    <button>
                    <img src={cartlogo} alt="Logo carrito de compras blanco" />
                    </button>
                </div>
}

export default CartWidget;