import React from 'react'
// import fotosrc from'../soapItem.png'
import {Link} from 'react-router-dom'

const Item = ({item})=>{
    
    const {id,name,description,imageurl,stock} = item;
    
    return<>
    <Link to={`/item/${id}`}>
        <article className="item">
            
            <div className="title"> <h3>{name}</h3></div>
            <div className="itemimg">
            
            <img src={process.env.PUBLIC_URL+imageurl} alt="Imagen de un Jabon Descriptiva del articulo" />
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
        </Link>
    </>
}

export default Item;