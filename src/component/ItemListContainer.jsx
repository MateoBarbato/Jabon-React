import React from 'react'

class ItemListContainer extends React.Component {
  constructor(props){
      super(props)
      this.text ='He aqui mi catalogo!'
  }

  render() {
      const greeting=this.text
    return <>
    <section className="itemlistcontainer">
        <h2>{greeting}</h2>
    </section>
    </>
  }
}

export default ItemListContainer;
