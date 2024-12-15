import React from "react";
import Navbar from "../navbar/Navbar";
import './Header.css';
import Video from '../../assets_copy/video/god-of-war.mp4';
import Compre from "../compre/Compre";
export const Header = () =>{
    return(
        <header>
            <Navbar/>
            <div className="content">
            <h1>UM MUNDO MAIS SOMBRIO E PRIMITIVO</h1>
            <p>Do mármore e colunas ornadas do Ólimpo para as florestas, este é um reino novo, com suas próprias espécies de criaturas, monstros e deuses.</p>
                <div>
                    <Compre/>
                    <a href="#" id="saiba">SAIBA MAIS</a>

                    <div className="div_video">
                        <video autoPlay muted controls>
                            <source src={Video} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;