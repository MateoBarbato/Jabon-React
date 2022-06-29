import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children})=>{

    const [theme,setTheme] = useState(false)

    function changeTheme() {
        if(theme===false){
            console.log('negro wey')
            setTheme(true)
        }else if(theme ===true){
            console.log('blanco wey')
            setTheme(false)
        }
    }


    return (
    <ThemeContext.Provider value={{changeTheme,theme}}>
        {children}
    
    </ThemeContext.Provider>
    )
}


export default ThemeContextProvider;