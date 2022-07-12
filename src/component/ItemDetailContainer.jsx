import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
// import {itemsPromiseid} from './itemsPromise'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../firebase'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [spinner, setSpinner] = useState(false)
  const [item, setItem] = useState({})

  useEffect(() => {
    setSpinner(true)
    const db = database

    const itembyid = doc(db, 'items', id)
    getDoc(itembyid).then((snapshot) => {
      if (snapshot.exists()) { setItem({ id: snapshot.id, ...snapshot.data() }) }
    })
      .catch(error => { console.log(error) })
      .finally(() => { setSpinner(false) })
  }, [id])

  return (<>

        {spinner
          ? <Loading/>
          : <ItemDetail item={item}/>}
        </>
  )
}

export default ItemDetailContainer
