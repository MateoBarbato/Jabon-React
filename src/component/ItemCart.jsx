import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const ItemCart = (item) => {
  const { id, imageurl, ammount, precio, name } = item.item
  const { removeItem } = useContext(CartContext)

  function handleRemove () {
    removeItem(id)
  }

  return (
    <>
      <section className="itemCart">
        <div className="img">
          <img src={imageurl} alt="imagen de muestra del item" />
        </div>
        <div className="itemCartInfo">
          <h4>{name}</h4>
          <h4>Precio por Unidad: {precio}</h4>
          <div className="cartAmmountInputContainer">
            <input
              disabled="disabled"
              className="cartAmmountInput"
              type="number"
              defaultValue={ammount}
            />
          </div>
        </div>
        <div className="buttonBorrarItem">
          <button className="button" onClick={handleRemove}>
            Borrar item
          </button>
        </div>
      </section>
    </>
  )
}

export default ItemCart
