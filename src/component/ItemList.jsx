import React from 'react';
import Item from './Item'

const ItemList = ({ items }) => {
    return <>
    {items?.map((item)=>{return <Item key={item.id} precio={item.precio} name={item.name} description={item.description} stock={item.stock} initial={item.initial} />})}
    </>
        
}


export default ItemList;