import React from 'react'
import './Hero.css'
import HeroImg from '../../../resources/png/Hero.jpg'
function Hero() {
  return (
    <section className="Hero">
        <div className='HeroImg'>
        <img src={HeroImg} alt="Imagen principal del sitio" width='100px'/>
        </div>
        <div className='HeroTxt'>
            <h1>NUM-NUM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus, doloremque deleniti ipsum corporis nisi </p>
        </div>
    </section>
  )
}

export default Hero