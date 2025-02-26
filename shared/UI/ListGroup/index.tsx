import React from 'react'
import styles from './list_group.module.scss'
import Link, { LinkProps } from 'next/link'

interface ListItem {
  title: string
  description: string | React.ReactNode
  isLink?: boolean
  linkHref?: string
  target?: string
  rel?: string
}

interface Props {
  className?: string
  heading?: string
  items: ListItem[]
}
export const ListGroup: React.FC<Props> = ({ className, heading, items }) => {
  return (
    <div>
      {heading && <h1 className="heading">{heading}</h1>}
      <ul className={styles.list_group}>
        {items.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            {item.isLink ? (
              <Link
                href={item.linkHref || '/'}
                target={item.target || '_self'}
                rel={item.rel || 'noopener noreferrer'}
                className="link"
              >
                {item.description}
              </Link>
            ) : (
              <p>{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
