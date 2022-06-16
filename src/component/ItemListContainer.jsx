import React, { useEffect } from 'react'
import {useState} from 'react'
import Loading from './Loading'
import {itemsPromise} from './itemsPromise'
import ItemList from './ItemList';

const ItemListContainer = ()=>{
        
const [spinner,setSpinner] = useState(false) 
const [itemsarr,setItems] = useState()
const [filter,setFilter] = useState("")

useEffect(() => {
    setSpinner(true)
    itemsPromise(2000).then(itemsarr=>{setItems(itemsarr)})
    .catch(error=>{console.log(error)})
    .finally(()=>{setSpinner(false)})
    },[]);

    const filterItems = arritems => {
        return filter !== "" ? arritems.filter(item => item.type === filter) : arritems;
    }


    return <>
        {spinner 
        ? <Loading/> 
        : <div className="itemlistbackground"><ItemList items={itemsarr}/></div> }
        </>
}
export default ItemListContainer;
 


