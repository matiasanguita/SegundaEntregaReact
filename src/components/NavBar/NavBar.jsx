import React, { useState } from "react";
import "./NavBar.css";
import Carrito from "../Carrito/Carrito";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";  

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para cerrar el menú
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li className="navbar-items">
                    <Link to="/" onClick={closeMenu}>Inicio</Link>
                </li>
                <li className="navbar-items">
                    <Link to="/blog" onClick={closeMenu}>Nuestras Donas</Link> 
                </li>
                <li className="navbar-items"> 
                    <Link to="/ofertas" onClick={closeMenu}>Ofertas</Link> 
                </li>
                <li className="navbar-items">
                    <Link to="/NuestrasDonas" onClick={closeMenu}>Nuestras Donas</Link> 
                </li>
            </ul>
            <div className="logo-container">
                <Link to="/NuestrasDonas">
                    <img src={logo} alt="Logo Donas Angol" className="logo" />
                </Link>
            </div>
            <Carrito /> 
        </nav>
    );
}

export default NavBar;