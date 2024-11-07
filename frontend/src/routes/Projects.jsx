import React from 'react'
import ProjectNav from '../components/project-components/ProjectNav'
import ProjectCard from '../components/project-components/ProjectCard'
import findmyap from "../assets/projects/findmyap.png"

export default function Projects() {
  return (
    <div className="mx-4 pb-4">
      <div className='grid grid-cols-1 xs:grid-cols-2 gap-4'>
        <div className='xs:col-span-2'>
          <ProjectNav />
        </div>
        <ProjectCard projectTitle={"He"} projectImg={findmyap}/>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
