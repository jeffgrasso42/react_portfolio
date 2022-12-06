import React from 'react'
import portrait from '../../assets/img/portrait.jpg'

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">About <span className="text-secondary">Me</span></h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <img src={portrait} alt="Jeff Grasso" className="bio-image" />

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Recent college graduate with a passion for technology and a strong background in critical analysis and the
            efficient communication of information. Strong written and verbal communications skills derived from
            majoring in English with proficiency with basic front end website development tools and database management.
          </p>
        </div>
        <div className="job job-1">
          <h3>Cramer & Ahern</h3>
          <h6>Paralegal Assistant</h6>
          <p>
            Responsibilities: Corresponding with clients, assisting in the preparation of Wills, Trusts, and other legal
            documents, handling Estate planning paperwork, and making filings with local Probate Courts.
          </p>
        </div>
        <div className="job job-2">
          <h3>IT Recovery Specialists</h3>
          <h6>Server Dismantling, Component Handling & Order Fulfillment</h6>
          <p>
            Responsibilities: Server recovery, component salvaging, inventory management, shipping and order
            fulfillment.
          </p>
        </div>
        <div className="job job-3">
          <h3>Columbia Fullstack Coding Bootcamp</h3>
          <h6>Student</h6>
          <p>Certified graduate of the Columbia Fullstack Coding Bootcamp</p>
        </div>
      </div>
    </main>
  )
}

export default About