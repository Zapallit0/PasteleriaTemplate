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

<div> <img src={imagee} alt="imagen center" className="imagen-center" />

</div>
  
  <div><img src={imagene} alt="imagene" className="imagene" />
  </div>
  { }
  </>
  )
  }
  export default App;