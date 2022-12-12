import React from 'react'
import Media from 'react-media'
import portraitSmall from '../../assets/img/portrait_sm.jpg'
import portrait from '../../assets/img/portrait.jpg'

const Nav = ({ navDisplay, currentPage, handlePageChange, toggleNavDisplay}) => {

  const smallPortraitStyles = {
    width: '150px',
    height: '150px',
    background: `url(${portraitSmall})`,
    borderRadius: '50%',
    border: 'solid 3px #82aaff'
  }

  const portraitStyles = {
    width: '250px',
    height: '250px',
    background: `url(${portrait})`,
    borderRadius: '50%',
    border: 'solid 3px #82aaff'
  }

  return (
    <nav className={!navDisplay ? 'menu' : 'menu show'}>
        <div className={!navDisplay ? 'menu-branding' : 'menu-branding show'}>
          <Media queries={{
            small: "(max-width: 768px)"
          }}>
            {matches => (
              matches.small ? (
                <div id='small' style={smallPortraitStyles}></div>
              ) : (
                <div id='large' style={portraitStyles}></div>
              )
            )}
          </Media>
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