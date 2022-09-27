import React, {useContext} from 'react'
import { ThemeContext } from './contexts/theme'

function ReactContext() {
  const [[theme, isDark], toggleTheme] = useContext(ThemeContext)
  console.log("theme", theme);
  return (
    <div className='main' style={{
      backgroundColor: theme.backgroundColor, 
      color: theme.color,
      height: '100vh',
    }}>
      <h2>It's a {isDark ? "Dark" : "Light"} theme</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default ReactContext