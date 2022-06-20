import React from 'react'
import cartlogo from '../carrito.png'

const CartWidget = ()=>{
        // function onclickstatus (){

        // }

      return    <div className='cartlogo-container'>
                    {/* <button type='button' onClick={()=>{}}> */}
                    <img src={cartlogo} alt="Logo carrito de compras blanco" />
                    {/* </button> */}
                </div>
}

export default CartWidget;