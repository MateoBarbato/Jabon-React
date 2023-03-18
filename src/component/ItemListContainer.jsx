import React, { useEffect, useState } from 'react'
import Loading from '../Helpers/Loading'
import ItemList from './ItemList'

import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../firebase'

const ItemListContainer = () => {
  const [spinner, setSpinner] = useState(false)
  const [itemsarr, setItemsArr] = useState()
  const [filter, setFilter] = useState('')
  const { type } = useParams()

  useEffect(() => {
    setFilter(type || '')
  }, [type])

  useEffect(() => {
    const db = database
    setSpinner(true)
    const itemsCollection = collection(db, 'items')

    if (filter === '') {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setItemsArr(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch('Hubo un error!!!!! Corran')
        .finally(() => {
          setSpinner(false)
        })
    } else {
      const q = query(itemsCollection, where('type', '==', filter))
      getDocs(q)
        .then((snapshot) => {
          if (snapshot.size === 0) {
            console.log('Request Vacia')
          }
          setItemsArr(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch('Hubo un error!!!!! Corran')
        .finally(() => {
          setSpinner(false)
        })
    }
  }, [filter])

  return <>{spinner ? <Loading /> : <ItemList items={itemsarr} />}</>
}
export default ItemListContainer
