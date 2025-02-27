'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

interface Props {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    // Делаем проверку только на клиенте
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as Theme)
    } else {
      // Если нет сохраненной темы, проверяем системные предпочтения
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
    }
    setIsHydrated(true) // После загрузки, ставим hydrated в true
  }, [])

  useEffect(() => {
    // Сохраняем тему в localStorage, когда она меняется
    if (isHydrated) {
      localStorage.setItem('theme', theme)
    }
  }, [theme, isHydrated])

  useEffect(() => {
    // Применяем соответствующие классы к body, только после загрузки
    if (isHydrated) {
      document.body.classList.toggle('light-theme', theme === 'light')
      document.body.classList.toggle('dark-theme', theme === 'dark')
    }
  }, [theme, isHydrated])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Показываем children только после того как все инициализировано
  if (!isHydrated) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
