import React from 'react'
import '../css/Toggle.css'
import { useContext } from 'react'
import {ThemeContext} from './ThemeContext'


const Toggle = ()=>{

    const {changeTheme}= useContext(ThemeContext)

    return (
      <label className="switch">
      <input onClick={changeTheme} type="checkbox"/>
      <span className="slider"></span>
    </label>
    )
}


export default Toggle

