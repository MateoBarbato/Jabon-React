import React from 'react'
import ItemDetail from './ItemDetail'
import {useState,useEffect} from 'react'
import Loading from './Loading'
import itemsPromise from './itemsPromise'


const ItemDetailContainer = () => {
    const [spinner,setSpinner] = useState(false) 
    const [item,setItem] = useState();

    useEffect(() => {
        setSpinner(true)
            setTimeout(() => {
            itemsPromise.then((items)=>{
                setItem(items[1])
                console.log(items[1])
            })   
            .catch(()=>{console.log('que paso wn')})
            .finally(()=>{setSpinner(false);console.log('cargue bien')})
            }, 2000);
        },[]);

    return <>
       {spinner 
        ? <Loading/> 
        :<div className="detailContainer"><ItemDetail item={item}/></div>}
    </>
}

export default ItemDetailContainer
