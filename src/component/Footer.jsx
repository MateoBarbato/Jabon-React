import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const themecondition = theme ? 'footer-theme-dark' : 'footer-theme'

  return (
      <div className={themecondition}>
      <footer >

        <ul>
          <li>
           <Link to= {'/'}>Twitter</Link>
          </li>
          <li>
            <Link to= {'/'}>Instagram</Link>
          </li>
          <li>
            <Link to= {'/'}>WhatsApp</Link>
          </li>
        </ul>
        <div className='footer-div-marca'>
        <h4 >Jaboon Company ©</h4>
        <h4>
          <Link to= {'/contact'}>Barbatomateo@gmail.com</Link>
        </h4>
        </div>

      </footer>
      </div>
  )
}

export default Footer
