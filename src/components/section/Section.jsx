import React from "react";
import Img1 from '../../assets_copy/img/photo-1.svg';
import Img2 from '../../assets_copy/img/photo-2.svg';
import Img3 from '../../assets_copy/img/photo-3.svg';
import './Section.css';
const Section = () =>{
    return(
        <section id="section_reino">
        <div id="imgs">
            <img src={Img1} alt="img1"/>
            <img src={Img2} alt="img2"/>
            <img src={Img3} alt="img3"/>
        </div>
        <div id="content_texts">
            <h2>LUTE NO REINO NÓRDICO</h2>
            <p>Com a vingança contra os deuses do olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos.  É nesse mundo duro e implacável que ele deve lutar para sobreviver... E ensinar seu filho a fazer o mesmo.</p>
        </div>
            
        </section>
    );
};

export default Section;