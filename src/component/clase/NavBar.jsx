import React from 'react';
import image from '../../soap.png'

export const NavBar = () =>{
// PUEDO EJECUTAR JAVASCRIPT ACA    
    return <header>
    <div className='brand-container'>
        <div className='name-img-container'>
        <h1>
          Jaboon
        </h1>
        <div className='image-div'>
          <img src={image} alt="" />
        </div>
        </div>
    </div>
    <nav>
      <ul className="nav-ul">
        <li>
          <a href='' className='a-link-nav'>Jabones </a>
        </li>
        <li>
          <a href='' className='a-link-nav'>Miscelaneos</a>
        </li>
        <li>
          <a href='' className='a-link-nav'>Nosotros</a>
        </li>
        <li>
          <a href='' className='a-link-nav'>Carrito </a>
        </li>
      </ul>
    </nav>
  </header>
}