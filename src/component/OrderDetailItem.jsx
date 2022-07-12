import React from 'react'

const OrderDetailItem = ({ items }) => {
  const { name, precio, ammount } = items

  return <>
    <section className="itemCart">
        <div className="itemCartInfo">
            <h4>{name}</h4>
            <h4>Precio por Unidad: {precio}</h4>
            <input className='cartAmmountInput' type="number" defaultValue={ammount} />
        </div>
        </section>
        </>
}

export default OrderDetailItem
