import React, { useContext } from 'react'
import '../css/Toggle.css'

import { ThemeContext } from '../Context/ThemeContext'

const DarkMode = () => {
  const { changeTheme } = useContext(ThemeContext)

  return (
    <label className="switch">
      <input onClick={changeTheme} type="checkbox" />
      <span className="slider"></span>
    </label>
  )
}

export default DarkMode
