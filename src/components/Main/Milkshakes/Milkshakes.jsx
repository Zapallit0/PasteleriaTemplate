import React from 'react'
import './Milkshakes.css'

import Cinnamon from '../../../resources/png/Cinamons.jpg'
import BerryMilshake from '../../../resources/png/BerryMilshake.png'
function Milkshakes() {
  return (
    <section className='Milshakes'>
        <img src={Cinnamon} alt="Imagen de milkshake" height="500px" />
        <div className='CouruselMilshake'>
          <h3>¿Con qué los tomamos?</h3>
          <div className='MilshakeCard'>
              <h5>Fruity</h5>
              <img src={BerryMilshake} alt="Imagen de milkshake frutal" height="500px" />
          </div>
          <h4>Milkshake #1</h4>
        </div>
    </section>
  )
}

export default Milkshakes