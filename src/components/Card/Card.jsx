import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props){
  
  return (
    <Link className="link" to={`/product/${props.id}`}>
      <div className="card">
        <div className="image">
          {props.isNew === true ?<span>New Season</span>:null}
          <img
            src={
              props.img
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              props.img2
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{props.title}</h2>
        <div className="prices">
          <h3>${props.oldPrice}</h3>
          <h3>${props.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
