import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import NosotrosContainer from './component/NosotrosContainer'
import NosotrosMejorado from './component/NosotrosMejorado'
import ItemDetailContainer from './component/ItemDetailContainer'
import NotFound from './component/NotFound'
import Cart from './component/Cart'
import CartContextProvider from './component/CartContext'
import ThemeContextProvider from './component/ThemeContext'
import CartForm from './component/CartForm'
import OrderDetail from './component/OrderDetail'
import './css/App.css'
import './css/ItemCount.css'
import './css/Toggle.css'

// PREGUNTAR DONDE VA EXACTAMENTE EL HEADER Y FOOTER
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <CartContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<NosotrosMejorado />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:type" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
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
