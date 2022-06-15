import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
import {itemsPromiseid} from './itemsPromise'


const ItemDetailContainer = () => {
    const [spinner,setSpinner] = useState(false) 
    const [item,setItem] = useState({});

    
    useEffect(()=>{
        setSpinner(true);
        itemsPromiseid(1,2000).then(item=>{setItem(item)})
        .catch(error=>{console.log(error)})
        .finally(()=>{setSpinner(false)})
    },[])

    return <>
       {spinner 
        ? <Loading/> 
        :<div className="detailContainer"><ItemDetail item={item}/></div>}
    </>
}

export default ItemDetailContainer;
