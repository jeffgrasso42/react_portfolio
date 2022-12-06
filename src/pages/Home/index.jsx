import React from 'react'

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">Jeff <span className="text-secondary">Grasso</span></h1>
      <h2 className="sm-heading">Full Stack Web Developer</h2>
      <div className="icons">
        <a href="https://www.linkedin.com/in/jeff-grasso">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/jeffgrasso42">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </main>
  )
}

export default Home