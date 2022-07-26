import { useContext, React } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'
import NavBar from './NavBar'
const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { pathname } = useLocation()
  // Se usa pathname para poder acceder a las propiedades de un background fijo solo en la ruta '/nosotros'
  const themecondition = theme ? 'header-dark' : 'header'

  return (
    <>
      <header
        className={themecondition}
        style={{ position: pathname === '/nosotros' ? 'fixed' : 'static' }}
      >
        <div className="brand-container">
          <div className="name-logo-container">
            <NavLink to="/">
              <h1>Jaboon</h1>
            </NavLink>
            <div className="logo-div">
              <img
                src={'https://i.postimg.cc/5ycDrF4S/soap.png'}
                alt="Logo de la pagina, un dispensador de jabon y espuma."
              />
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    </>
  )
}

export default Header
