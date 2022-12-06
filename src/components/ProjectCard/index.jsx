import React from 'react'

const ProjectCard = ({ name, image, github, deployed, deployedUrl }) => {
  const hide = {
    display: 'none'
  }

  return (
    <div className="item">
      <a href="#!">
        <img src={image} alt={name} />
      </a>
      <a style={!deployed ? hide: {}} href={deployedUrl} className="btn" target="_blank"> <i className="fas fa-eye"></i> Project </a>
      <a href={github} className="btn" target="_blank"> <i className="fab fa-github"></i> GitHub </a>
    </div>
  )
}

export default ProjectCard