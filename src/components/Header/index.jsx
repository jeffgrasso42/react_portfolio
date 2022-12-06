import React, { useState } from 'react'
import Nav from '../Nav'

const Header = ({ handlePageChange }) => {
  const [show, setShow] = useState(true)
  
  const toggleHandler = () => {
    show ? setShow(false) : setShow(true);
  }
  
  return (
    <>
      <div className={!show ? "menu-btn close" : "menu-btn"} onClick={toggleHandler}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <Nav handlePageChange={handlePageChange}/>
    </>

  )
}

export default Header