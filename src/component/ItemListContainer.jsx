import React from 'react'
import Item from './Item'

const ItemListContainer = ()=>{
    const Items = [{id : 1,
                    precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1},
                    {id : 1,
                    precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1},
                    {id : 1,
                    precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1},
                    {id : 1,
                    precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1},
                    {id : 1,
                    precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1},
                    {id : 1,
                     precio : '120$',
                    name: 'Jabonardo',
                    stock : 5,
                    initial : 1}]

    return <>
        <section className="itemlistcontainer">
        {Items.map((item)=>{
           return <Item id={item.id} precio={item.precio} name={item.name} stock={item.stock} initial={item.initial} />
        })}
        </section>
        </>
}

export default ItemListContainer;
