import { useContext, React } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
import NavBar from './NavBar'

const Header = () => {
  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'header-dark' : 'header'

  return <>

      <header className={themecondition}>
        <div className='brand-container'>
        <div className='name-logo-container'>
        <Link to='/' >
        <h1>
          Jaboon
        </h1>
        </Link>
          <div className='logo-div'>
          <img src={'https://i.postimg.cc/5ycDrF4S/soap.png'} alt="Logo de la pagina, un dispensador de jabon y espuma." />
          </div>
        </div>
    </div>
    <NavBar/>
  </header>

  </>
}

export default Header
