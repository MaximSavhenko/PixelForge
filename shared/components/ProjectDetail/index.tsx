import React from 'react'
import styles from './project_detail.module.scss'
import Link from 'next/link'
import { Project } from '../Projects'

interface Props {
  className?: string
  project: Project
}

export const ProjectDetail: React.FC<Props> = ({ className, project }) => {
  return (
    <section className={styles.project_detail}>
      <div className="container">
        <div className={styles.project_detail__wrapp}>
          <h1 className="heading">{project.title}</h1>

          <img
            src={project.image}
            alt={project.title}
            className={styles.project_detail_img}
          />

          <p>{project.stack}</p>
          <Link href={project.gitHubLink} className={styles.project_detail_link}>
            <img src="/git_black.svg" alt="github" />
            GitHub repo
          </Link>
        </div>
      </div>
    </section>
  )
}
