import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Suscríbete para Descuentos y cupones</p>
        <div className="subscribe-section">
          <input type="email" placeholder="Correo electrónico" className="subscribe-input" />
          <button className="subscribe-button">Suscríbete</button>
        </div>
        <img src="ruta-del-cupcake.png" alt="Cupcake" className="footer-image" />
      </div>
      
      <div className="footer-middle">
        <div className="footer-column">
          <p>Ubicación 1</p>
          <p>Distrito 1</p>
          <p>Calle 2</p>
        </div>
        <div className="footer-column">
          <p>Horario</p>
          <p>Lunes - Viernes: 9:00 am - 6:00 pm</p>
          <p>Sábado: 9:00 am - 4:00 pm</p>
        </div>
        <div className="footer-column">
          <p>Nombre</p>
          <p>Contacto</p>
          <p>Nosotros</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">LOGO</div>
        <div className="footer-name">Nombre pastelería</div>
        <div className="footer-social">
          <a href="url-de-red-social-1" className="social-link">Red#1</a>
          <a href="url-de-red-social-2" className="social-link">Red#2</a>
          <a href="url-de-red-social-3" className="social-link">Red#3</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
