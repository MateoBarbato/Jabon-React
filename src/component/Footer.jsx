import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'

const Footer=()=> {

  const {theme} = useContext(ThemeContext)
  const themecondition = theme?'footer-theme-dark':'footer-theme';

    return (
      <div className={themecondition}>
      <footer >
       
        <ul>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">WhatsApp</a>
          </li>
        </ul>
        <div className='footer-div-marca'>
        <h4 >Jaboon Company ©</h4>
        <h4><a href="/">Barbatomateo@gmail.com</a></h4>
        </div>
        
      </footer>
      </div>
    )

}

export default Footer