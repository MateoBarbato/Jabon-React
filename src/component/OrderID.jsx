import React from "react"
import { Link } from "react-router-dom"

const OrderID = ({id})=>{

    return <article>
    <section className='cart-muestra-id-container'>
        <div className="cart-muestra-gracias">
        <img src="https://i.postimg.cc/FHN7NsM7/5594935.png" alt="A happy Shopping Bag" />
        <h3>Gracias Por Comprar Con Nosotros! Ahora eres parte de la familia Jaboon!</h3>
        </div>
        <h4 className='cart-muestra-id'>Tu numero de Orden De Compra es : {id}</h4>
        <div className="cart-muestra-links">
            <Link className="button" to='/'>Volver al Home</Link>
            <Link className="button" to={`/orderID/${id}`}>Ver datos de mi Orden</Link>
        </div>
    </section>
</article>
}

export default OrderID