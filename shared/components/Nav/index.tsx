'use client'

import Link from 'next/link'
import React from 'react'
import styles from './nav.module.scss'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/lib/cn'

interface Props {
  className?: string
}

interface NavItem {
  href: string
  label: string
}

export const Nav: React.FC<Props> = ({ className }) => {
  const pathname = usePathname()
  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contacts', label: 'Contacts' },
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {navItems.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={cn(
                styles.nav__list_item,
                pathname === link.href ? styles.nav__list_item_active : ''
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
