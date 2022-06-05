import React from 'react'
import fotosrc from'../soapItem.png'

const Item = (props)=>{
    const precio = '120$';
    const itemName='Jabonardo'
    return<>
        <article className="item">
            <div className="itemimg">
            <img src={fotosrc} alt="Imagen de un Jabon Descriptiva del articulo" />
            </div>
            <div className="itemdescription">
            <h4>{itemName}</h4>
            <h5>Precio:{precio}</h5>
            </div>
        </article>
    </>
}

export default Item;