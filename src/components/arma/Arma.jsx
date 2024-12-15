import React from "react";
import './Arma.css';

const Arma = ({item}) =>{
    return(
        <div key={item.id} id="arma">
            <div id="arma_direction">
                <div id="texts_arma">
                    <h2>{item.textBig}</h2>
                    <p>{item.textSmall}</p>
                    <button id="saiba_arma">Saiba mais</button>
                </div>
                <img src={item.img} alt="img_arma"/>
            </div>
        </div>
    )
}

export default Arma;