import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import NosotrosContainer from './NosotrosContainer';




const AppRouting = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={ <NosotrosContainer />} />
        </Routes>
    </BrowserRouter>
}

export default AppRouting