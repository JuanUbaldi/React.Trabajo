import React from "react";
import Button from "../Button/Button";
import "./item.css";
import ClickCounter from "../ClickCounter/ClickCounter";
import { Link } from "react-router-dom";
function Item(props) {
  console.log(props.Key);
  let urlId = `/detalle/${props.Key}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imgUrl} alt="Product-Img" />
      </div>
      <div className="card-details">
        <h2>{props.title}</h2>
        <h2>{props.detail}</h2>
      </div>
      <h4 className="Price">${props.price}</h4>
      <Link to={urlId}>
        <Button>comprar</Button>
      </Link>
      <br />
      <ClickCounter stock={props.stock} />
    </div>
  );
}

export default Item;
