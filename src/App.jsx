import './App.css'
import Instagram from './resources/icons/Instagram.svg'
import Youtube from './resources/icons/Youtube.svg'
import Ex from './resources/icons/X.svg'
import NumNum from './resources/icons/NumNum.svg'
import HeroImg from './resources/png/Hero.jpg'
import Menu from './resources/png/Menu.jpg'
import PCupcakes from './resources/png/PastelesCupcakes.jpg'
import Cupcake from './resources/icons/cupcake.svg'
import Donnut from './resources/icons/donut.svg'

// Cupcakes
import BananaCupcake from './resources/desserts/BananaCupcake.png'
import ChocoChipsCupcake from './resources/desserts/ChocoChipsCupcake.png'
import ChocolateCupcake from './resources/desserts/ChocolateCupcake.png'
import VanillaCupcake from './resources/desserts/VanillaCupcake.png'
import CaramelCupcake from './resources/desserts/CaramelCupcake.png'
function App() {
  return (
    <>
    <header>
        <nav>
            {/* Logo Icono */}
            <img src={NumNum} alt="Logo DigitalRescue" height="100px" />
            {/* Opciones */}
            <ul className='Opciones'>
                <li><a href="HomePage">Home</a></li>
                <li><a href="Recetario">Recetario</a></li>
                <li><a href="Pasteles">Pasteles</a></li>
                <li><a href="Nosotros">Nosotros</a></li>
            </ul>
            {/*Redes*/}
            <ul className='Redes'>
              <li className='Red'><a href=""><img src={Instagram} alt="Instagram" /></a></li>
              <li className='Red'><a href=""><img src={Youtube} alt="Youtube" /></a></li>
              <li className='Red'><a href=""><img src={Ex} alt="Tiktok" /></a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section className="home">
          <img src={HeroImg} alt="" height="400px"/>
          <div className='HeroTxt'>
            <h1>Nombre Pasteleria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus, doloremque deleniti ipsum corporis nisi </p>
          </div>
        </section>
        <section className="TwoOptions">
            <div>
              <img src={PCupcakes} alt="" height="400px"/>
              <div>
                <img src={Cupcake} alt="" height="100px"/>
                <h3>Pasteles y Cupcakes</h3>
              </div>
            </div>
            <div>
              <img src={Menu} alt="" height="400px"/>
              <div>
                <h3>Menu</h3>
                <img src={Donnut} alt="" height="100px"/>
              </div>
            </div>
        </section>
        <section className='CupcakesCourusel'>
          <h3>!Lo más fresco¡</h3>
          <div>
            <div><img src={BananaCupcake} alt="" height="200px"/></div>
            <h5>Cupcake#1</h5>
            <p>desde S/5</p>
          </div>
          <div>
            <div><img src={VanillaCupcake} alt="" height="200px"/></div>
            <h5>Cupcake#2</h5>
            <p>desde S/6</p>
          </div>
          <div>
            <div><img src={ChocolateCupcake} alt="" height="200px"/></div>
            <h5>Cupcake#3</h5>
            <p>desde S/7</p>
          </div>
          <div>
            <div><img src={ChocoChipsCupcake} alt="" height="200px"/></div>
            <h5>Cupcake#4</h5>
            <p>desde S/8</p>
          </div>
          <button>
            !Compra AQUI¡ 
          </button>
        </section>
        <section className='Milshakes'>
          <img src="" alt="" />
          <div className='CouruselMilshake'>
            <h3>¿Con qué los tomamos?</h3>
            <div>
              <h5>Fruity</h5>
              <img src="" alt="" />
            </div>
          </div>
        </section>
        <section className='Process'>
          <h3>Nuestro Proceso</h3>
          <div>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ullam, nostrum aperiam, voluptatem, quas soluta quos aliquam natus quo accusamus sed doloremque vel beatae. Vitae omnis minima est praesentium corrupti.</p>
            <img src="" alt="" />
          </div>
          <img src="" alt="" />
        </section>
    </main>
    <footer>
        <section className="contact">
            <h2>Contact Us</h2>
            <address>
                Email: <a href="mailto:example@domain.com">example@domain.com</a>
                Phone: <a href="tel:+1234567890">(123) 456-7890</a>
            </address>
        </section>
        <p> Desarrollado por Digital Rescue.</p>
    </footer>
    </>
  )
}

export default App
