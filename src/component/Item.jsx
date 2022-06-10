import React from 'react'
import fotosrc from'../soapItem.png'
import ItemCount from './ItemCount'

const Item = ({id,precio,name,stock,initial})=>{
    

    return<>
        <article className="item">
            <div className="itemimg">
            <img src={fotosrc} alt="Imagen de un Jabon Descriptiva del articulo" />
            </div>
            <div className="itemdescription">
            <h4>{name}</h4>
            <h5>Precio:{precio}</h5>
            </div>         
            <ItemCount stock={stock} initial={initial}/>   
        </article>
        
    </>
}

export default Item;