import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const {name,precio,description,stock,initial,imageurl} = item
 
    return <>
    <section className="detailContainer">
        <article className="itemDetailContainer">
                    <div className="itemDetail">
                        <div className="itemDetailimg">
                            <img src={imageurl} alt="" />
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
        </article>
    </section>
    </>
}


export default ItemDetail
