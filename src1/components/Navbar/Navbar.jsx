import React from 'react'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navBar">
        <div className="navContainer">
            <span style={{fontWeight:"bold"}} className='logo'>Travel <span style={{color:"#FFA03F"}} className='logo'>Toor</span></span>
            
            <div className="navItems">
                <ul className='navItems'>
                    <li style={{fontWeight:"bold"}}>Home</li>
                    <li>About</li>
                    <li>Packages</li>
                    <li>Contact</li>
                    <FontAwesomeIcon icon={faSearch} />
                </ul>
            </div>
<div className="bars">
<FontAwesomeIcon icon={faBars} />
</div>
        </div>
    </div>
  )
}

export default Navbar