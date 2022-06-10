import React from 'react'
import fotosrc from'../soapItem.png'

const Item = ({id,precio,name,stock,initial,description})=>{
    

    return<>
        <article className="item">
            <div className="title"> <h3>{name}</h3></div>
            <div className="itemimg">
            <img src={fotosrc} alt="Imagen de un Jabon Descriptiva del articulo" />
            </div>
            <div className="itemdescription">
             <h5>{description}</h5>
            </div>
            <div className="buttondetalle">
            <button className='button'>Ver detalle del producto</button>
            </div>
            <div className="stock">
                <h3>Stock disponible:{stock}</h3>
            </div>
        </article>
        
    </>
}

export default Item;