import React from 'react'

const ItemListContainer = props =>{
   return <>
    <section className="itemlistcontainer">
        <h2>{props.greeting}</h2>
    </section>
    </>
}

export default ItemListContainer;
