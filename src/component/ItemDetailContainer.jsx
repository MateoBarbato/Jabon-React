import React from 'react'
import ItemDetail from './ItemDetail'
import {useState,useEffect} from 'react'
import Loading from './Loading'
import itemsPromise from './itemsPromise'


const ItemDetailContainer = () => {
    // pasarle el item al itemdetail para que lo pueda mostrar
    const [spinner,setSpinner] = useState(false) 
    const [item,setItem] = useState();

    useEffect(() => {
        setSpinner(true)
            setTimeout(() => {
            itemsPromise.then((itemsDB)=>{
                setItem(itemsDB[2]);
            })
            .catch(()=>{console.log('que paso wn')})
            .finally(()=>{setSpinner(false);console.log('cargue bien')})
            }, 2000);
        },[]);

    return <>
       {spinner 
        ? <Loading/> 
        :<div className="detailContainer">
            <ItemDetail key={item.id} precio={item.precio} name={item.name} description={item.description} stock={item.stock} initial={item.initial}/>
         </div>}
        
    </>
}


export default ItemDetailContainer
