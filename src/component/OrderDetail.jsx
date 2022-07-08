import React from 'react'
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {doc,getDoc} from 'firebase/firestore'
import {database} from '../firebase'
import Loading from './Loading'
import OrderDetailItem from './OrderDetailItem'

const OrderDetail = ()=>{

const {id} = useParams();
const [spinner,setSpinner] = useState(false) 
const [order,setOrder] = useState({});
console.log(order)

useEffect(()=>{
    setSpinner(true);
    const db = database

    const orderbyid = doc(db,'orders',id)
    getDoc(orderbyid).then((snapshot)=>{
        if(snapshot.exists())
        {setOrder({id:snapshot.id,...snapshot.data()})}})
    .catch(error=>{console.log(error)})
    .finally(()=>{setSpinner(false)})
}
,[id])

const {buyer,items,total} = order
console.log(order)


return (
    spinner
    ? <Loading/> 
    :<article>
        
    </article>
)
{/* <OrderDetailItem key={item.id} item={item}/> */}
}

export default OrderDetail