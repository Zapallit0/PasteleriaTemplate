import React from 'react'
import CaramelCupcake from '../../resources/desserts/CaramelCupcake.png'

function Subscription() {
  return (
    <section className='Subscription'>
        <p>Suscribete para Descuentos y Cupones</p>
        <div>
        <input type="email" placeholder='Correo Electronico'/>
        <button>Suscríbete</button>
        <img src={CaramelCupcake} alt="Cupcake de caramelo" height='200px'/>
        </div>
    </section>
  )
}

export default Subscription