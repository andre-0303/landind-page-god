import React from "react";
import './Heroi.css'

const Heroi = ({item}) =>{
    return <img src={item.img} id="img_heroi"/>
}

export default Heroi;