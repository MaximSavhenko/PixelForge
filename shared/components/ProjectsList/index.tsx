import React from 'react'
import styles from './projects_list.module.scss'
import Link from 'next/link'
import { Project } from '../Projects'

interface Props {
  className?: string
  projects: Project[]
}

export const ProjectsList: React.FC<Props> = ({ className, projects }) => {
  return (
    <ul className={styles.projects_list}>
      {projects.map((project) => (
        <li key={project.id}>
          <Link href={`/projects/${project.id}`}>
            <img src={project.image} alt="project" />
            <p>{project.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
