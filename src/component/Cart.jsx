import React from 'react'
import {useContext} from 'react'
import {CartContext} from './CartContext'

const Cart=()=>{

    const {checkitems,clear,removeItem} = useContext(CartContext)

    
return <><h1>Hola desde el Carrito</h1>
        <button onClick={checkitems}>Hola ke hay?</button>
        <button onClick={clear}>Borra to'</button>
        button
        </>
}

export default Cart