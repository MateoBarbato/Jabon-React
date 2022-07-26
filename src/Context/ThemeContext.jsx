import { React, useState, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(false)

  function changeTheme () {
    if (theme === false) {
      setTheme(true)
    } else if (theme === true) {
      setTheme(false)
    }
  }

  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
