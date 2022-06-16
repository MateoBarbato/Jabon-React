import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    
    const {name,precio,description,stock,initial,imageurl} = item
 

    // PONERLE SOMBRAS AL CSS? PUEDE QUEDAR BIEN PARA DESPEGARLO DEL FONDO BLANCO
    return <>
    <div className="detailContainer">
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className="itemDetailimg">
                    <img src={process.env.PUBLIC_URL+imageurl} alt="" />
                </div>
                <div className="itemDetail_info">
                    <h2 className='itemDetail_info_titulo'>{name}</h2>
                    <div className="itemDetail_info_description">
                    <p>{description}</p>
                    <p>{description}</p>
                    </div>
                    <div className='itemDetail_info_precio'>
                    <p>{precio}</p>
                    <ItemCount initial={initial} stock={stock} />
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    </>
}


export default ItemDetail
