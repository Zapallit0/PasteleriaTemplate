import React from 'react'
import HeroImg from '../../../resources/png/Hero.jpg'
function Hero() {
  return (
    <section className="home">
        <img src={HeroImg} alt="Imagen principal del sitio" height="400px"/>
        <div className='HeroTxt'>
            <h1>Nombre Pasteleria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus, doloremque deleniti ipsum corporis nisi </p>
        </div>
    </section>
  )
}

export default Hero