import React from 'react'
import '../../css/materialize.css'
import '../../css/materialize.min.css'
export const NavBarMaterialize = ()=>{
    return   <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Jabones</a></li>
        <li><a href="/">Miscelaneos</a></li>
        <li><a href="/">Nosotros</a></li>
      </ul>
    </div>
  </nav>
}