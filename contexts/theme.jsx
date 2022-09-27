import { createContext, useState } from "react";

const themes = [
  {
    backgroundColor: '#000',
    color: '#fff'
  },
  {
    backgroundColor: '#fff',
    color: '#000'
  }
]

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const theme = isDark ? themes[0] : themes[1]
  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <ThemeContext.Provider value={[ [theme, isDark ], toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}