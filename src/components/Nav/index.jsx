import React from 'react'

const Nav = ({ navDisplay, currentPage, handlePageChange, toggleNavDisplay}) => {

  return (
    <nav className={!navDisplay ? 'menu' : 'menu show'}>
        <div className={!navDisplay ? 'menu-branding' : 'menu-branding show'}>
          <div className="portrait"></div>
        </div>
        <ul className={!navDisplay ? 'menu-nav' : 'menu-nav show'}>
          <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
            <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link current' : 'nav-link'}> Home </a>
          </li>
          <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
            <a href="#about" className={currentPage === 'About' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('About')}> About Me </a>
          </li>
          <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
            <a href="#work" className={currentPage === 'Work' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('Work')}> My Work </a>
          </li>
          <li className={!navDisplay ? 'nav-item' : 'nav-item show'}>
            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link current' : 'nav-link'} onClick={() => handlePageChange('Contact')}> How To Reach Me </a>
          </li>
        </ul>
      </nav>
  )
}

export default Nav