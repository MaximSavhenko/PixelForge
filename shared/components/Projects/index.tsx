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

// const projects: Project[] = [
//   { id: '1', image: '/project.png', title: 'Gaming streaming portal' },
//   { id: '2', image: '/project.png', title: 'Online store' },
//   { id: '3', image: '/project.png', title: 'Social network' },
//   { id: '4', image: '/project.png', title: 'Blog platform' },
//   { id: '5', image: '/project.png', title: 'Portfolio website' },
//   { id: '6', image: '/project.png', title: 'E-learning platform' },
// ];

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

