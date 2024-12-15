import React from "react";
import Logo from '../../assets_copy/img/logo.svg';
import './Nav.css';
import Compre from '../compre/Compre';
export const Navbar = () =>{
    return(
        <nav id="nav_bar">
        <img src={Logo} alt="logo" id="logo"/>
            <div id="links">
                <a href="#">Vídeos e Telas</a>
                <a href="#">Bastidores</a>
                <a href="#">Comunidade</a>
                <Compre/>
            </div>
        </nav>
    );
}
export default Navbar;