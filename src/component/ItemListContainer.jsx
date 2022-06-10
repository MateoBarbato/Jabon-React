import React, { useEffect } from 'react'
import {useState} from 'react'
import Item from './Item'
import Loading from './Loading'
import itemsPromise from './itemsPromise'

const ItemListContainer = ()=>{
        
const [spinner,setSpinner] = useState(false) 
const [itemsarr,setItems] = useState()

useEffect(() => {
    setSpinner(true)
        setTimeout(() => {
        itemsPromise.then((itemsDB)=>{setItems([...itemsDB])})
        .catch(()=>{console.log('que paso wn')})
        .finally(()=>{setSpinner(false);console.log('cargue bien')})
        }, 2000);
    },[]);



    return <>
        {spinner 
        ? <Loading/> 
        : <section className="itemlistcontainer">
        {itemsarr?.map((item)=>{return <Item key={item.id} precio={item.precio} name={item.name} description={item.description} stock={item.stock} initial={item.initial} />})}
        </section>}
        </>
}
export default ItemListContainer;
 


