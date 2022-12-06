import React, { useState } from 'react'
import Nav from '../Nav'

const Header = ({ currentPage, handlePageChange, navDisplay,setNavDisplay }) => {
  
  const toggleNavDisplay = () => {
    navDisplay ? setNavDisplay(false) : setNavDisplay(true);
  }
  
  return (
    <>
      <div className={navDisplay ? "menu-btn close" : "menu-btn"} onClick={toggleNavDisplay}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <Nav currentPage={currentPage} navDisplay={navDisplay} handlePageChange={handlePageChange} toggleNavDisplay={toggleNavDisplay}/>
    </>

  )
}

export default Header