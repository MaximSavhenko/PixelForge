import React from 'react'
import styles from './skills.module.scss'
import { ListGroup } from '@/shared/UI'

interface Props {
  className?: string
}

export const Skills: React.FC<Props> = ({ className }) => {
  const listItems = [
    {
      title: 'Frontend',
      description:
        'JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents',
    },
    {
      title: 'Backend',
      description: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
    },
  ]
  return (
    <section className={styles.skills}>
      <div className="container">
        <ListGroup items={listItems} />
      </div>
    </section>
  )
}
