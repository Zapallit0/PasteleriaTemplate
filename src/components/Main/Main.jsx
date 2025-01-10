import React from 'react'
import Hero from './Hero/Hero'
import TwoOptions from './TwoOptions/TwoOptions'
import CupcakeList from './CupcakesList/CupcakeList'
import Milkshakes from './Milkshakes/Milkshakes'
import Process from './Process/Process'
import Subscription from '../Subscription/Subscription'
import Footer from '../Footer/Footer'
function Main() {
  return (
    <main>
        <Hero/>
        <TwoOptions/>
        <CupcakeList/>
        <Milkshakes />
        <Process />
        <Subscription/>
        <Footer/>
    </main>
  )
}

export default Main