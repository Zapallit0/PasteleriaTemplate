import React from 'react'
// Cupcakes
import BananaCupcake from '../../../resources/desserts/BananaCupcake.png'
import ChocoChipsCupcake from '../../../resources/desserts/ChocoChipsCupcake.png'
import ChocolateCupcake from '../../../resources/desserts/ChocolateCupcake.png'
import VanillaCupcake from '../../../resources/desserts/VanillaCupcake.png'
function CupcakeList() {
  return (
    <section className='CupcakesCourusel'>
              <h3>!Lo más fresco¡</h3>
              <div>
                <div><img src={BananaCupcake} alt="Banana Cupcake" height="200px"/></div>
                <h5>Cupcake#1</h5>
                <p>desde S/5</p>
              </div>
              <div>
                <div><img src={VanillaCupcake} alt="Vanilla Cupcake" height="200px"/></div>
                <h5>Cupcake#2</h5>
                <p>desde S/6</p>
              </div>
              <div>
                <div><img src={ChocolateCupcake} alt="Chocolate Cupcake" height="200px"/></div>
                <h5>Cupcake#3</h5>
                <p>desde S/7</p>
              </div>
              <div>
                <div><img src={ChocoChipsCupcake} alt="Choco Chips Cupcake" height="200px"/></div>
                <h5>Cupcake#4</h5>
                <p>desde S/8</p>
              </div>
              <button>
                !Compra AQUI¡ 
              </button>
            </section>
  )
}

export default CupcakeList