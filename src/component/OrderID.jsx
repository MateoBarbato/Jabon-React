import React from "react"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
import {CartContext} from './CartContext'

const OrderID = ({id})=>{

    const {clear} = useContext(CartContext)
    const {theme} = useContext(ThemeContext)
    const themecondition = theme?'cart-muestra-id-container-dark':'cart-muestra-id-container';

    return <article>
    <section className={themecondition}>
        <div className="cart-muestra-gracias">
        <img src="https://i.postimg.cc/FHN7NsM7/5594935.png" alt="A happy Shopping Bag" />
        <h3>Gracias Por Comprar Con Nosotros! Ahora eres parte de la familia Jaboon!</h3>
        </div>
        <h4 className='cart-muestra-id'>Tu numero de Orden De Compra es : {id}</h4>
        <div className="cart-muestra-links">
            <Link className="button" to='/' onClick={clear}>Volver al Home</Link>
            <Link className="button" to={`/orderID/${id}`} onClick={clear}>Ver datos de mi Orden</Link>
        </div>
    </section>
</article>
}

export default OrderID