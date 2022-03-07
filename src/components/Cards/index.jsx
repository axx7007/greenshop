import React from "react";
import img from "../../assets/imgs/bgflower.png";
import "./style.css";
const Cards = (props) => {
  return (
    <div className="card-wrapper">
      <div className="imageWrapper">
        <img src={img} className="image" />
      </div>
      <h5 className="title">{props.data.title}</h5>
      <p className="card-price">{props.data.price}</p>
    </div>
  );
};
export default Cards;
