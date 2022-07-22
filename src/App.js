import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/Header'
import Footer from './component/Footer'
import Nosotros from './component/Nosotros'
import ItemDetailContainer from './component/ItemDetailContainer'
import NotFound from './component/NotFound'
import CartContainer from './component/CartContainer'
import CartContextProvider from './component/CartContext'
import ThemeContextProvider from './component/ThemeContext'
import CartForm from './component/CartForm'
import OrderDetail from './component/OrderDetail'
import EmailContact from './component/EmailContact'
import './css/App.css'
import './css/ItemCount.css'
import './css/Toggle.css'

// PREGUNTAR DONDE VA EXACTAMENTE EL HEADER Y FOOTER
function App () {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <CartContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:type" element={<Home />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/cartForm" element={<CartForm />} />
              <Route path="/orderID/:id" element={<OrderDetail />} />
              <Route path="/contact" element={<EmailContact />} />
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
