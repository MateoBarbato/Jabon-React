import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Nosotros from './Nosotros'
import {Link} from 'react-router-dom';


const NosotrosContainer = () => {

    return  <>
            <Header />
            <h2>Home</h2>
            <Link to='/'>Home</Link>
            <Footer/>
            </>
}

export default NosotrosContainer;