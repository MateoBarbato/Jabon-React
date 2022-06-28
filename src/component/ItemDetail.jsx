import React from 'react'
import ItemCount from './ItemCount'
import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from './CartContext'

const ItemDetail = ({item}) => {
    const {id,name,precio,description,stock,initial,imageurl} = item

    const [itemcount,setItemcount] = useState(true)

    const {addItem,isInCart} = useContext(CartContext)

    const onAdd = (valor,ammount)=>{
       
        setItemcount(valor)
        
        if(isInCart(id)){
            addItem(item,ammount)
            
        }else {
            console.log('ya esta en el carrito')
        }
        // addItem(item,ammount)
    }




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
                            {itemcount
                            ?<ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                            :<Link to='/cart'><button className='button'>Terminar mi compra</button></Link>}
                            
                            </div>
                        
                        </div>
                    </div>
        </article>
    </section>
    </>
}


export default ItemDetail
