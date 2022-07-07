import React from 'react'
import {CartContext} from './CartContext'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
import ItemCart from './ItemCart'
import EmptyCart from './EmptyCart'
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import CartForm from './CartForm'


const Cart=()=>{
    
    
const onSubmit = (data)=>{
        setForm(false)
        console.log(data)
    }

      
const [form, setForm] = useState(true);
const [item,setItem]= useState('Id no encontrado')


const {clear,itemsCart,totalprice} = useContext(CartContext)
const condition = itemsCart.length===0

console.log(totalprice)

const {theme} = useContext(ThemeContext)
const themecondition = theme?'cartContainerBackground-black':'cartContainerBackground';

    
return <>

{condition
?<EmptyCart/>
:form?<div className={themecondition}>
<article className='cartContainer'>

{itemsCart.map(item=><ItemCart key={item.id} item={item}/>)}
    
<section className='cartInfo'>
<div className="cartPrice">
    <p>Precio total:{totalprice}</p>
</div>
<div className="button"><Link to={"/cartform"}>Siguiente Paso</Link></div>
<div className='buttonClear'>
    <button onClick={clear} className='button'>Borrar Todo</button>
</div>
</section>
<CartForm onSubmit={onSubmit}/>
</article>
</div>
:<article>
    <section className='cart-muestra-id-container'>
        <h3 className='cart-muestra-id'>Tu numero de Orden De Compra es : {item}</h3>
        <div className="button">
            <Link to='/'>Volver al Home</Link>
        </div>
    </section>
</article>
}

</>

}

export default Cart