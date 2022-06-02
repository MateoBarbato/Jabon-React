import React from 'react';
import image from '../soap.png'
import {CartWidget} from './CartWidget'

const NavBar = () =>{
// PUEDO EJECUTAR JAVASCRIPT ACA    
    return <>
       
        <header>
    <div className='brand-container'>
        <div className='name-logo-container'>
        <h1>
          Jaboon
        </h1>
        <div className='logo-div'>
          <img src={image} alt="Logo de la pagina, un dispensador de jabon y espuma." />
        </div>
        </div>
    </div>
    <nav>
        <ul >
          <li>
            <a href='/' className='a-link-nav'>Jabones </a>
          </li>
          <li>
            <a href='/' className='a-link-nav'>Miscelaneos</a>
          </li>
          <li>
            <a href='/' className='a-link-nav'>Nosotros</a>
          </li>
        </ul>
        <CartWidget/>
    </nav>
  </header>
        
      
  </>
}

export default NavBar;