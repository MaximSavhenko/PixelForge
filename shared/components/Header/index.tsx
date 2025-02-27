import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import { Nav } from '../Nav'
import { ThemeToggle } from '../ThemeToggle'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__row}>
          <Link href="/" className={styles.header__title}>
            PixelForge
          </Link>
          <Nav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
