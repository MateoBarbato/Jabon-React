import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './component/ItemListContainer'
import Header from './component/Header'
import Footer from './component/Footer'
import Nosotros from './component/Nosotros'
import ItemDetailContainer from './component/ItemDetailContainer'
import NotFound from './Helpers/NotFound'
import CartContainer from './component/CartContainer'
import CartContextProvider from './Context/CartContext'
import ThemeContextProvider from './Context/ThemeContext'
import CartForm from './component/CartForm'
import OrderDetail from './component/OrderDetail'

import './css/App.css'
import './css/ItemCount.css'
import './css/Toggle.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <CartContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:type" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/cartForm" element={<CartForm />} />
              <Route path="/orderID/:id" element={<OrderDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContextProvider>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
