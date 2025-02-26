import Link from 'next/link'
import React from 'react'
import styles from './nav.module.scss'

interface Props {
  className?: string
}

export const Nav: React.FC<Props> = ({ className }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__list_item}>
          <Link href="#">Home</Link>
        </li>
        <li className={styles.nav__list_item}>
          <Link href="#">Projects</Link>
        </li>
        <li className={styles.nav__list_item}>
          <Link href="#">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}
