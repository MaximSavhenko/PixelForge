'use client'

import { useTheme } from '@/shared/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import styles from './theme_toggle.module.scss'
import { cn } from '@/shared/lib/cn'

import React from 'react'

interface Props {
  className?: string
}

export const ThemeToggle: React.FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        styles.theme__toggle,
        theme === 'dark' ? styles.dark__theme : ''
      )}
      aria-label="Toggle theme"
    >
      <Sun className="icon sun" />
      <Moon color="black" />
    </button>
  )
}
