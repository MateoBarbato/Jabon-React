import React, { useEffect } from 'react'
import {useState} from 'react'
import Loading from './Loading'
import {itemsPromise} from './itemsPromise'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ()=>{
        
const [spinner,setSpinner] = useState(false) 
const [itemsarr,setItems] = useState()
const [filter,setFilter] = useState("")
const {type} = useParams()

const filteritems = itemsarray=>{
    return itemsarray.filter(item=>item.type === filter) 
    
}

useEffect(()=>{
    setFilter(type || "")
},[type])

useEffect(() => {
    setSpinner(true)
    
    console.log(type)
    itemsPromise(100).then(itemsarr=>
        {setItems(filter !== "" ? filteritems(itemsarr) : itemsarr)})
    .catch(error=>{console.log(error)})
    .finally(()=>{setSpinner(false)})
    },[filter]); 
    
    
    
    return <>
        {spinner 
        ? <Loading/> 
        :<ItemList items={itemsarr}/>}
        </>
}
export default ItemListContainer;
 


