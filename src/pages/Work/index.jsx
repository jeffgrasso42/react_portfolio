import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import iEatzImg from '../../assets/img/projects/iEatz.png'
import safeMedImg from '../../assets/img/projects/safeMed.png'
import teamProfileGeneratorImg from '../../assets/img/projects/team-profile-generator.png'

const Work = () => {
  const projects = [
    {
      name: 'iEatz',
      image: iEatzImg,
      github: 'https://github.com/inidhi99/ieats.git',
      deployed: false,
      deployedUrl: null
    },
    {
      name: 'safeMed',
      image: safeMedImg,
      github: 'https://github.com/rsenecal/Project2-safeMed.git',
      deployed: true,
      deployedUrl: 'https://project2-safe-med.herokuapp.com/'
    },
    {
      name: 'Team Profile Generator',
      image: teamProfileGeneratorImg,
      github: 'https://github.com/jeffgrasso42/team-profile-generator.git',
      deployed: false,
      deployedUrl: null
    }
  ]


  return (
    <main id="work">
      <h1 className="lg-heading">My <span className="text-secondary">Work</span></h1>
      <h2 className="sm-heading">Check out some of my projects...</h2>
      <section className="projects">
        {projects.map((project, idx) => {
          return <ProjectCard 
            key={idx} 
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
            deployedUrl={project.deployedUrl} />
          })}
      </section>
    </main>
  )
}

export default Work