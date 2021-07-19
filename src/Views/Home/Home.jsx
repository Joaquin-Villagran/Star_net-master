import React from "react";
import "./Home.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div>
        <h1>Bienvenidos al sitio de Compra Online JT!!</h1>
      <div className="home">
        <ItemListContainer />        
      </div>
    </div>
  );
}

export default Home;
