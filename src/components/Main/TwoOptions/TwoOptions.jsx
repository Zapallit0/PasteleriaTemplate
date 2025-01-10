import React from 'react'

import Menu from '../../../resources/png/Menu.jpg'
import PCupcakes from '../../../resources/png/PastelesCupcakes.jpg'
import Cupcake from '../../../resources/icons/cupcake.svg'
import Donnut from '../../../resources/icons/donut.svg'
function TwoOptions() {
  return (
    <section className="TwoOptions">
        <div>
            <img src={PCupcakes} alt="Imagen de pasteles y cupcakes" height="400px"/>
            <div>
            <img src={Cupcake} alt="Icono cupcake" height="100px"/>
            <h3>Pasteles y Cupcakes</h3>
            </div>
        </div>
        <div>
            <img src={Menu} alt="Imagen del Menu" height="400px"/>
            <div>
            <h3>Menu</h3>
            <img src={Donnut} alt="Icono de Dona" height="100px"/>
            </div>
        </div>
    </section>
  )
}

export default TwoOptions