import React from 'react'
import styles from './footer.module.scss'
import { Social } from '../Social'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrap}>
          <Social />
         <p className={styles.footer__copy}>&copy; 2025 Pixel Forge</p>
        </div>
      </div>
    </footer>
  )
}
