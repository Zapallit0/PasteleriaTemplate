import './App.css'

function App() {

  return (
    <>

    <header>
        <nav>
            {/* Logo Icono */}
            <img src="" alt="" />
            {/* Opciones */}
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            {/*Redes*/}
            <ul>
              <li><a href=""><img src="" alt="" /></a></li>
              <li><a href=""><img src="" alt="" /></a></li>
              <li><a href=""><img src="" alt="" /></a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section className="home">
          <img src="" alt="" />
          <div>
            <h1>Nombre Pasteleria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus, doloremque deleniti ipsum corporis nisi </p>
          </div>
        </section>

        <section className="">
            <h2>About Us</h2>
            <article>
                <h3>Our Story</h3>
                <p>Information about your company/website.</p>
            </article>
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
