import React, { useState } from 'react'
import ProjectNav from '../components/project-components/ProjectNav'
import ProjectCard from '../components/project-components/ProjectCard'
import { projectDetails } from '../components/project-components/project-data/projectDetails'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = Object.entries(projectDetails).filter(([_, project]) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
});

  return (
    <div className="mx-4 pb-4 min-h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 0.30)" }}>
      <div className='grid grid-cols-1 xs:grid-cols-2 gap-4 p-4'>
        <div className='xs:col-span-2'>
        <ProjectNav 
            onCategoryChange={setSelectedCategory} 
            selectedCategory={selectedCategory}
          />
        </div>
        {filteredProjects.map(([id, project]) => (
          <ProjectCard 
            key={id}
            projectID={id}
            projectTitle={project.title}
            projectImg={project.image}
            projectDesc={project.description}
            projectLink={project.link}
            projectStack={project.stack}
          />
        ))}
      </div>
    </div>
  )
}
