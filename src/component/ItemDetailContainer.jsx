import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
import {itemsPromiseid} from './itemsPromise'


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [spinner,setSpinner] = useState(false) 
    const [item,setItem] = useState({});

    
    useEffect(()=>{
        setSpinner(true);
        itemsPromiseid(id,2000).then(item=>{setItem(item)})
        .catch(error=>{console.log(error)})
        .finally(()=>{setSpinner(false)})
    },[id])

    return <>
       {spinner 
        ? <Loading/> 
        :<ItemDetail item={item}/>}
    </>
}

export default ItemDetailContainer;
