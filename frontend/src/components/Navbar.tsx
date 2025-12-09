import React from "react";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">🐾 Adopet</div>
            <ul className="navbar-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="/animais">Animais</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;