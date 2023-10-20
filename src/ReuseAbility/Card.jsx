import { useState } from "react";
import React from "react";
import "./card.css"
import Popup from "./Popup";
function Card({name,description,img ,product}) {
    const [modal, setmodal] = useState(false)

const toggle=()=>{
  setmodal(!modal) 
}
  return (
    <div class="box-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={img} height={100} width={100} alt="" />
      <button onClick={toggle}>Product Detail</button>
    <Popup modal={modal} toggle={toggle} product={product} />
    </div>
  );
}

export default Card;
