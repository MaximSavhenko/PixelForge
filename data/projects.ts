export const projects = [
  {
    id: '1',
    image: '/project.png',
    title: 'Gaming streaming portal',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
  {
    id: '2',
    image: '/project.png',
    title: 'Online store',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
  {
    id: '3',
    image: '/project.png',
    title: 'Social network',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
  {
    id: '4',
    image: '/project.png',
    title: 'Blog platform',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
  {
    id: '5',
    image: '/project.png',
    title: 'Portfolio website',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
  {
    id: '6',
    image: '/project.png',
    title: 'E-learning platform',
    gitHubLink: 'https://github.com/',
    stack: 'React',
  },
]

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id) || null
}
