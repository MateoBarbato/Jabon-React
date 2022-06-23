import React from 'react'
import { useState} from 'react'
import '../css/ItemCount.css'


const ItemCount= ({stock,initial,onAdd})=>{

    const [number,setNumber]= useState(initial)
    
    const num0 = number === 0
    const numMax = number === stock

    const increase=()=>{
        if(number < stock){
         return setNumber(prevNumber=>prevNumber+1)
        }
    }
    const decrease= ()=>{
        if(number >0){
         return   setNumber(prevNumber=>prevNumber-1)
        }
    }

    const handleItemcount = (e)=>{
        e.stopPropagation()
        // lo guardo para saber la cantidad de productos que se pidieron, despues supongo que lo usaremos para el carrito
        var cantidad = number;

        onAdd(false)
    }


    return <>
        <div className='itemcount'>
             <div  className='contador'>
             {num0 
             ? <button disabled className='disabled' onClick={()=>{decrease()}}>-</button>
             : <button className='button' onClick={()=>{decrease()}}>-</button>}
             <h5>{number}</h5>
             {numMax
              ? <button disabled className='disabled' onClick={()=>{increase()}}>+</button>
              : <button className='button' onClick={()=>{increase()}}>+</button>}
             </div>
             {num0 
             ? <button disabled className='disabled' >Agregar al carrito</button>
             : <button className='button' onClick={handleItemcount}>Agregar al carrito</button>}
        </div>
    </>
}

export default ItemCount
