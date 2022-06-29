import React from 'react';
import image from '../soap.png'
import CartWidget from './CartWidget'
import Toggle from './Toggle';
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'
import {CartContext} from './CartContext'

const Header = () =>{


    const {theme} = useContext(ThemeContext)
    const themecondition = theme?'header-dark':'header';

    const {cartAmmount} = useContext(CartContext)
      const condition = cartAmmount>0

    return <>
       
      <header className={themecondition}>
        
    <div className='brand-container'>
        <div className='name-logo-container'>
        <Link to='/'>
        <h1>
          Jaboon
        </h1>
        </Link>
          <div className='logo-div'>
          <img src={image} alt="Logo de la pagina, un dispensador de jabon y espuma." />
          </div>
        </div>
    </div>
    <nav>
        <ul >
          <li>
            <Link to='/category/soapbar'>Jabones</Link>
          </li>
          <li>
            <Link to='/category/misc'>Miscelaneos</Link>
          </li>
          <li>
            <Link to='/nosotros'>Nosotros</Link>
          </li>
        </ul>
        {condition&&<CartWidget cartAmmount={cartAmmount}/>}
        <Toggle/>
    </nav>
  </header>
        
      
  </>
}

export default Header;