import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import ItemCart from './ItemCart'

const Cart=()=>{

    const {clear,itemsCart} = useContext(CartContext)

    
return <>

<article className='cartContainer'>
{itemsCart.map(item=><ItemCart key={item.id}item={ item}/>)}


<section className='buttonClear'>
<button onClick={clear} className='button'>Borrar Todo</button>
</section>
</article>


</>



}

export default Cart