import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const OrderID = ({ id }) => {
  const MySwal = withReactContent(Swal)
  const { theme } = useContext(ThemeContext)
  const themecondition = theme
    ? 'cart-muestra-id-container-dark'
    : 'cart-muestra-id-container'
  const copyToClipboard = () => {
    navigator.clipboard.writeText(id)
    MySwal.fire({
      title: 'Order ID copiada',
      timer: 1000,
      timerProgressBar: true
    })
  }

  return (
    <article>
      <section className={themecondition}>
        <div className="cart-muestra-gracias">
          <img
            src="https://i.postimg.cc/FHN7NsM7/5594935.png"
            alt="A happy Shopping Bag"
          />
          <h3>
            Gracias Por Comprar Con Nosotros! Ahora eres parte de la familia Jaboon!
          </h3>
        </div>
        <button className="cart-muestra-id" onClick={copyToClipboard}>
          <h4>
          Tu numero de Orden De Compra es : {id}
          </h4>
        </button>
        <div className="cart-muestra-links">
          <Link className="button" to="/">
            Volver al Home
          </Link>
          <Link className="button" to={`/orderID/${id}`}>
            Ver datos de mi Orden
          </Link>
        </div>
      </section>
    </article>
  )
}

export default OrderID
