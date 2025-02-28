import React from 'react';
import { ProjectsList } from '../ProjectsList';
import styles from './projects.module.scss';
import { projects } from '@/data/projects';

export interface Project {
  id: string;
  image: string;
  title: string;
  gitHubLink: string;
  stack: string;
}
interface Props {
  className?: string
}

export const Projects: React.FC<Props> = ({ className }) => {
  return (
    <section className={styles.projects}>
        <div className='container'>
            <h2 className='heading'>Projects</h2>
            <ProjectsList projects={projects} />
        </div>
    </section>
  );
};

