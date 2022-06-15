import React, { useEffect } from 'react'
import {useState} from 'react'
import Loading from './Loading'
import {itemsPromise} from './itemsPromise'
import ItemList from './ItemList';

const ItemListContainer = ()=>{
        
const [spinner,setSpinner] = useState(false) 
const [itemsarr,setItems] = useState()

useEffect(() => {
    setSpinner(true)
    itemsPromise(2000).then(itemsarr=>{setItems(itemsarr)})
    .catch(error=>{console.log(error)})
    .finally(()=>{setSpinner(false)})
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
 


