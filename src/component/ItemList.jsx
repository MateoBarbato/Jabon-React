import React from 'react';
import Item from './Item'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'



const ItemList = ({ items }) => {

    const {theme} = useContext(ThemeContext)
    const themecondition = theme?'itemlistbackground-dark':'itemlistbackground-light';
// anadir un boton que use la funcion de filtar los items en un boton
// por ej boton que diga filtrar por tipo liquido solido(jabones ) y que cuando le des tire el filter'solido' etc...

    return <>
        <div className={themecondition}>
        <section className="itemlistcontainer">
        {items?.map((item)=>{return <Item key= {item.id} item={item} />})}
        </section>
        </div>
    </>
        
}


export default ItemList;