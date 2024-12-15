import React, { useState } from "react";
import './Footer.css';
import Machado from '../../assets_copy/img/machado.svg';
import ArcoFlecha from '../../assets_copy/img/arco-flecha.svg'
import Arma from "../arma/Arma";
import './Footer.css'
const Footer = () =>{
    const [data, setData] = useState([
        {
            id:1,
            textBig:"PODER RÚNICO REFINADO",
            textSmall:"Novas habilidades permitem que Kratos use seu machado de maneiras inéditas",
            img:Machado,
        },
        {
            id:2,
            textBig:"MAIS DO QUE UM GAROTO COM UM ARCO",
            textSmall:"Atreus aprimorou suas habilidades de arqueria para desferir novos ataques",
            img:ArcoFlecha, 
        }
    ]);
    return(
        <>
            <footer id="footer_arma">
                <h2>ARMAS LENDÁRIAS</h2>
                <div id="armas">
                    {
                        data.map((item) => (
                            <Arma item={item}/>
                        ))
                    }
                </div>
            </footer>
        </>
    );
};

export default Footer;