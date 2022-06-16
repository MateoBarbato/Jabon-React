import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import NosotrosContainer from './component/NosotrosContainer';
import ItemDetailContainer from './component/ItemDetailContainer';
import './css/App.css'
import './css/ItemCount.css'


// PREGUNTAR DONDE VA EXACTAMENTE EL HEADER Y FOOTER
function App() {
  return  <>      
          
          <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={ <NosotrosContainer />} />
            <Route path='/Item/:id' element={ <ItemDetailContainer/>} />
        </Routes>
    </BrowserRouter>
          </>
}

export default App;
 