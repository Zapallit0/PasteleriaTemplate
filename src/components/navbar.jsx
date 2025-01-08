import React from "react";

function Navbar(){
return (
    <nav className="navbar">
        <img src="src/resources/23.png" alt="logo pasteleria" className="logo"/>
        <ul className="nav-links">
 <li>Home   </li>
 <li>Recetario </li>
 <li>Pasteles </li>
 <li>Nosotros</li> 
        </ul>

        <div className="social-icons">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-tiktok"></i></a>
      </div>
    </nav>
);

}

export default Navbar;