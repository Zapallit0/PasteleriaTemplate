import React from 'react'
import './Navbar.css'
import NumNum from '../../resources/icons/NumNum.svg'
import Instagram from '../../resources/icons/Instagram.svg'
import Youtube from '../../resources/icons/Youtube.svg'
import Ex from '../../resources/icons/X.svg'
function Navbar() {
  return (
    <header>
    <nav className='NavBar'>
      {/* Logo Icono */}
      <img className='LogoHeader' src={NumNum} alt="Logo DigitalRescue" height="60px" />
      {/* Opciones */}
      <ul className='Opciones'>
          <li><a href="HomePage">Home</a></li>
          <li><a href="Recetario">Recetario</a></li>
          <li><a href="Pasteles">Pasteles</a></li>
          <li><a href="Nosotros">Nosotros</a></li>
      </ul>
      {/*Redes*/}
      <ul className='Redes'>
        <li className='Red'><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
        <li className='Red'><a href="#"><img src={Youtube} alt="Youtube" /></a></li>
        <li className='Red'><a href="#"><img src={Ex} alt="Tiktok" /></a></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar