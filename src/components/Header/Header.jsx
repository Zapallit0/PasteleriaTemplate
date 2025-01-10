import React from 'react'
import Navbar from '../Navbar/Navbar'
import NumNum from '../../resources/icons/NumNum.svg'
function Header() {
  return (
    <header>
        {/* Logo Icono */}
        <img src={NumNum} alt="Logo DigitalRescue" height="100px" />
        <Navbar />
    </header>
  )
}

export default Header