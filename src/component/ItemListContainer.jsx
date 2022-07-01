import React, { useEffect } from 'react'
import Loading from './Loading'
import ItemList from './ItemList';
import {useState} from 'react'
import { useParams } from 'react-router-dom'
import {collection,getDocs,getFirestore,query,where} from 'firebase/firestore'


const ItemListContainer = ()=>{
        
const [spinner,setSpinner] = useState(false) 
const [itemsarr,setItems] = useState()
const [filter,setFilter] = useState("")
const {type} = useParams()

// const filteritems = itemsarray=>{
//     return itemsarray.filter(item=>item.type === filter) 
    
// }

useEffect(()=>{
    setFilter(type || "")
},[type])

useEffect(()=>{
    const db = getFirestore();
    setSpinner(true)
    const itemsCollection = collection(db,'items')

    if(filter === ""){
        getDocs(itemsCollection)
        .then((snapshot)=>{
            setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))})
        .catch('Hubo un error!!!!! Corran')
        .finally(()=>{setSpinner(false)} )
    }else {
        const q = query(itemsCollection,where('type','==',filter));
        getDocs(q)
        .then((snapshot)=>{
            if(snapshot.size===0){console.log('Request Vacia')}
            setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))})
        .catch('Hubo un error!!!!! Corran')
        .finally(()=>{setSpinner(false)} )
    }
    
},[filter])

    
    
    return <>
        {spinner 
        ? <Loading/> 
        :<ItemList items={itemsarr}/>}
        </>
}
export default ItemListContainer;
 







// useEffect(() => {
//     setSpinner(true)
//     itemsPromise(2000).then(itemsarr=>
//         {setItems(filter !== "" ? filteritems(itemsarr) : itemsarr)})
//     .catch(error=>{console.log(error)})
//     .finally(()=>{setSpinner(false)})
//     },[filter]); 
    