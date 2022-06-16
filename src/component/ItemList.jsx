import React from 'react';
import Item from './Item'

const ItemList = ({ items }) => {


// anadir un boton que use la funcion de filtar los items en un boton
// por ej boton que diga filtrar por tipo liquido solido(jabones ) y que cuando le des tire el filter'solido' etc...



    return <>
    {items?.map((item)=>{return <Item key={item.id} precio={item.precio} name={item.name} description={item.description} stock={item.stock} initial={item.initial} />})}
    </>
        
}


export default ItemList;