import React, { useContext } from 'react'
import Item from './Item'

import { ThemeContext } from './ThemeContext'

const ItemList = ({ items }) => {
  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'itemlistbackground-dark' : 'itemlistbackground-light'

  return <>
        <div className={themecondition}>
        <section className="itemlistcontainer">
        {items?.map((item) => { return <Item key= {item.id} item={item} /> })}
        </section>
        </div>
    </>
}

export default ItemList
