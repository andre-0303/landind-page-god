import React from "react";
import './Main.css'
//imgs flechas
import ArrowLeft from '../../assets_copy/img/arrow-left.svg';
import ArrowRight from '../../assets_copy/img/arrow-right.svg';
//imgs herois
import Kratos from '../../assets_copy/img/kratos.svg';
import Atreus from '../../assets_copy/img/atreus.svg';
import Freya from '../../assets_copy/img/freya.svg';
import AndrBoda from '../../assets_copy/img/angrboda.svg';
import Photo1 from '../../assets_copy/img/photo-1.svg';
import Photo2 from '../../assets_copy/img/photo-2.svg';
import Photo3 from '../../assets_copy/img/photo-3.svg';
import Machado from '../../assets_copy/img/machado.svg';
import Arco from '../../assets_copy/img/arco-flecha.svg';

//importando componente
import Heroi from "../heroi/Heroi";

//hook
//buscar um valor que o usuario fala pra gente, salva dentro da variavel data. Vai até o backend.
import { useState } from "react";

const Main = () =>{
   const [data, setData] = useState([
        {
            img:Kratos,
        },
        {
            img: Atreus,
        },
        {
            img: Freya,
        },
        {
            img: AndrBoda
        }
    ]);
    return(
        <section>
        <main>
            <h2 id="title">OS MAIORES HERÓIS DOS NOVE REINOS</h2>

            <div id="herois">
                <img src={ArrowLeft} alt="flecha" className="flecha"/>
                <div id="imgs_herois">
                     {
                        data.map((item) => (
                            <Heroi item={item}/>
                        ))
                     }
                </div>
                <img src={ArrowRight} alt="flecha" className="flecha"/>
            </div>
        </main>
        </section>
     
    )
}

export default Main;