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
              <li className='Red'><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
              <li className='Red'><a href="#"><img src={Youtube} alt="Youtube" /></a></li>
              <li className='Red'><a href="#"><img src={Ex} alt="Tiktok" /></a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section className="home">
          <img src={HeroImg} alt="Imagen principal del sitio" height="400px"/>
          <div className='HeroTxt'>
            <h1>Nombre Pasteleria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus, doloremque deleniti ipsum corporis nisi </p>
          </div>
        </section>
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
        <section className='Milshakes'>
          <img src="" alt="Imagen de milkshake" />
          <div className='CouruselMilshake'>
            <h3>¿Con qué los tomamos?</h3>
            <div>
              <h5>Fruity</h5>
              <img src="" alt="Imagen de milkshake frutal" />
            </div>
          </div>
        </section>
        <section className='Process'>
          <h3>Nuestro Proceso</h3>
          <div>
            <img src="" alt="Flecha 1" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus ullam, nostrum aperiam, voluptatem, quas soluta quos aliquam natus quo accusamus sed doloremque vel beatae. Vitae omnis minima est praesentium corrupti.</p>
            <img src="" alt="Flecha 2" />
          </div>
        </section>
        <section className='Subscription'>
          <p>Suscribete para Descuentos y Cupones</p>
          <div>
            <input type="email" placeholder='Correo Electronico'/>
            <button>Suscríbete</button>
            <img src={CaramelCupcake} alt="Cupcake de caramelo" height='200px'/>
          </div>
        </section>
    </main>
    <footer>
        <section className="info">
              <address>
                <p>Ubicacion</p>
                <p>Distrito Numero1</p>
                <p>Calle Las Florecitas</p>
              </address>
            <div>
                <h4>Atención:</h4>
                <p>Lunes-Viernes</p>
                <p>12:00 am- 5:00 pm</p>
                <p>Sábado</p>
                <p>10:00 am - 6:00 pm</p>
            </div>
            <div>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Recetario</a></li>
                <li><a href="">Pasteles</a></li>
                <li><a href="">Nosotros</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Club Galletas</li>
                <li>Club Pasteles</li>
                <li>Club Especial</li>
              </ul>
            </div>
        </section>
        <section>
          <img src="" alt="" />
          <h2></h2>
          <div className="Redes">
            <div><img src="" alt="" />
            
            </div>
            <div><img src="" alt="" />
            
            </div>
            <div><img src="" alt="" />
            
            </div>
          </div>
        </section>
    </footer>
    </>
  )
}

export default App
