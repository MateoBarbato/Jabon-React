import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return <>
    <div className="notFoundContainer">
        <h2>Uy! Tu carrito esta vacio!</h2>
        <Link to='/'>
        <h3>Volver a Explorar </h3>
        </Link>
        <div >
            <img src='https://i.postimg.cc/qMggbZFf/empty-cart-60e68bfd.png' alt="error 404 pagina no encontrada" />
        </div>

    </div>
    </>
}

export default EmptyCart
