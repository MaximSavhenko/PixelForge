import { getProjectById } from '@/data/projects'
import { ProjectDetail } from '@/shared/components'
import { Project } from '@/shared/components/Projects'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project: Project | null = getProjectById(id)
  if (!project) {
    return notFound()
  }

  return <ProjectDetail project={project} />
}
