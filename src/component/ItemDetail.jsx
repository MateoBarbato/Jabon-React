import React from 'react'
import imageurl from '../soapItem.png'
const ItemDetail = ({item}) => {
                    // 
                    // name,precio,description,stock,initial
    console.log(item)
 

    // PONERLE SOMBRAS AL CSS? PUEDE QUEDAR BIEN PARA DESPEGARLO DEL FONDO BLANCO
    return <>
        <div className="itemDetailContainer">
            <div className="itemDetail">
                <div className="itemDetailimg">
                    <img src={imageurl} alt="" />
                </div>
                <div className="itemDetail_info">
                    <h2 className='itemDetail_info_titulo'>{item.name}</h2>
                    <div className="itemDetail_info_description">
                    <p>{item.description}</p>
                    <p>{item.description}</p>
                    </div>
                    <div className='itemDetail_info_precio'>
                    <p>{item.precio}</p>
                    <button className='button'>Add to cart</button>
                    </div>
                   
                </div>
            </div>
        </div>

    </>
}


export default ItemDetail
