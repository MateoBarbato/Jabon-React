import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className="notFoundContainer">
        <h2>Uy! No se pudo encontrar la pagina!</h2>
        <Link to="/">
          <h3>Volver al Inicio </h3>
        </Link>
        <div>
          <img
            src="https://i.postimg.cc/SRSWjQvH/404-Error-rafiki.png"
            alt="error 404 pagina no encontrada"
          />
        </div>
      </div>
    </>
  )
}

export default NotFound
