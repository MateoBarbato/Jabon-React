import { React, useContext } from 'react'
import { CartContext } from './Context/CartContext'
import CartWidget from './CartWidget'
import DarkMode from './DarkMode'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const { cartAmmount } = useContext(CartContext)
  const condition = cartAmmount > 0
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/category/soapbar'}>Jabones</NavLink>
        </li>
        <li>
          <NavLink to={'/category/misc'}>Miscelaneos</NavLink>
        </li>
        <li>
          <NavLink to={'/nosotros'}>Nosotros</NavLink>
        </li>
      </ul>
      {condition && <CartWidget cartAmmount={cartAmmount} />}
      <DarkMode />
    </nav>
  )
}

export default NavBar
