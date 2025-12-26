import React from "react";
import { Link} from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo"> 🐾 Adopet </Link>
            <ul className="navbar-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/animais">Animais</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li> 
            </ul>
        </nav>
    )
}

export default Navbar;