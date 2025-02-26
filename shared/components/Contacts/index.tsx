import React from 'react'
import styles from './contacts.module.scss'
import { ListGroup } from '@/shared/UI'

interface Props {
  className?: string
}

export const Contacts: React.FC<Props> = ({ className }) => {
  const listItems = [
    {
      title: 'Location',
      description: 'Ukraine , Kharkiv',
    },
    {
      title: 'Telegram',
      description: '@usp_ms',
      isLink: true,
      linkHref: 'https://t.me/usp_ms',
      target: '_blank',
    },
    {
      title: 'Email',
      isLink: true,
      linkHref: 'mailto:uspmsm@gmail.com',
      description: 'uspmsm@gmail.com',
    },
  ]
  return (
    <section className={styles.contacts}>
      <div className="container">
        <ListGroup heading={'Contacts'} items={listItems} />
      </div>
    </section>
  )
}
