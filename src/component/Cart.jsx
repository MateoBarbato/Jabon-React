import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'

const Cart=()=>{
   

const {clear,itemsCart} = useContext(CartContext)
const condition = itemsCart.length===0

    
return <>

{condition
?<EmptyCart/>
:
<div className="cartContainerBackground">
    <article className='cartContainer'>
    
    {itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}
        
    <section className='buttonClear'>
        <button onClick={clear} className='button'>Borrar Todo</button>
    </section>
    </article>
</div>}
</>


}

export default Cart