import React from 'react'
import fotosrc from'../soapItem.png'
import ItemCount from './ItemCount'

const Item = (props)=>{
    const precio = '120$';
    const itemName='Jabonardo'
    const stock = 5
    const initial = 1

    const Item ={precio:precio,
                 itemName:itemName,
                 stock:stock,
                 initial:initial}
    return<>
        <article className="item">
            <div className="itemimg">
            <img src={fotosrc} alt="Imagen de un Jabon Descriptiva del articulo" />
            </div>
            <div className="itemdescription">
            <h4>{itemName}</h4>
            <h5>Precio:{precio}</h5>
            </div>         
            <ItemCount {...Item}/>   
        </article>
        
    </>
}

export default Item;