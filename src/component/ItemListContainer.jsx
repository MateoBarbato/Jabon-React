import React from 'react'

const ItemListContainer = props =>{
  const {greeting} = props;
   return <>
    <section className="itemlistcontainer">
        <h2>{greeting}</h2>
    </section>
    </>
}

export default ItemListContainer;
