import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Item({ param }) {
  return (
    
    <div className="item_Card_container">
      {/* <h1>{param.title}</h1> */}
      <div className="item_title">
        <h2>{param.name}</h2>
        <div className="item_img">
          <img src={`${param.img}`} alt="" />
        </div>
      </div>
      <Link to={`/item/${param.id}`}>
        <Button animated="fade" primary>
          <Button.Content visible>Comprar</Button.Content>
          <Button.Content hidden>${param.price}</Button.Content>
        </Button>
      </Link>
    </div>
  );
}
