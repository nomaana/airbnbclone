import React from "react";
import "../styles/Card.css";
function Card({ src, title, desription, price }) {
  return (
    <div className="card">
      <img alt="" src={src} />
      <div className="card_info">
        <h2>{title}</h2>
        <h4>{desription}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
