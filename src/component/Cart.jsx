import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'

const Cart=()=>{
   

const {clear,itemsCart,totalprice} = useContext(CartContext)
const condition = itemsCart.length===0

console.log(totalprice)

const {theme} = useContext(ThemeContext)
const themecondition = theme?'cartContainerBackground-black':'cartContainerBackground';

    
return <>

{condition
?<EmptyCart/>
:<div className={themecondition}>
    <article className='cartContainer'>
    
    {itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}
        
    <section className='cartInfo'>
    <div className="cartPrice">
        <p>Precio total:{totalprice}</p>
    </div>
    <div className='buttonClear'>
        <button onClick={clear} className='button'>Borrar Todo</button>
    </div>
    </section>
    </article>
</div>}
</>


}

export default Cart