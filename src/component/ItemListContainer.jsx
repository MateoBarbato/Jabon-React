import React, { useEffect } from 'react'
import {useState} from 'react'

import Loading from './Loading'
import itemsPromise from './itemsPromise'
import ItemList from './ItemList';

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
        :   <section className="itemlistcontainer">
            <ItemList items={itemsarr}/>
            </section>}
        </>
}
export default ItemListContainer;
 


