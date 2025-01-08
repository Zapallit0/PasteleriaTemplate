import './App.css';
import Navbar from './components/Navbar';
import heroImage from './resources/23.png'
import imagene from './resources/45.png'
import imagee from './resources/46.png'

function App() {
  return (
  <>
  <header>
{ /* comentario */ }
   <Navbar /> 
  </header>
  <div className="image">
  <img
    src={heroImage}
    alt="Imagen overlay"
    className="hero-image"
  />
  <div className="text-overlay">
    <h1>Logo</h1>
    <h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam
      consequatur.
    </h2>
  </div>
</div>
        {/* Galería de imágenes */}
        <section className="gallery">
          <div className="gallery-item">
            <img src={imagene} alt="Imagen 1" className="gallery-image" />
          </div>
          <div className="gallery-item">
            <img src={imagee} alt="Imagen 2" className="gallery-image" />
          </div>
        </section>
  { }
  </>
  )
  }
  export default App;