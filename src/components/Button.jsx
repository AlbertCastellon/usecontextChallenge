import React from 'react'
import { useTheme } from '../themes/ThemeContext';

const Button = () => {

    const { theme, changeTheme} = useTheme()
    const clickButton = () => {
        if(theme === 'light'){
            changeTheme('dark')
        }else{
            changeTheme('light')
        }
    }
    return (
        <>
        <button onClick={clickButton}>Light/Dark</button>
        </>
    )
}

export default Button