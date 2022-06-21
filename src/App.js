import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import NosotrosContainer from './component/NosotrosContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
import NotFound from './component/NotFound';
import './css/App.css'
import './css/ItemCount.css'



// PREGUNTAR DONDE VA EXACTAMENTE EL HEADER Y FOOTER
function App() {
  return  <>      
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={ <NosotrosContainer />} />
              <Route path='/item/:id' element={ <ItemDetailContainer/>} />
              <Route path='/category/:type' element={ <Home />} />   
              <Route path='*' element={ <NotFound/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
          </>
}

export default App;
 