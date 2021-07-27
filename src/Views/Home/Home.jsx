import React from "react";
import "./Home.css";
import { Header, Image } from "semantic-ui-react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Home() {
  return (
    <div>
      <Header as="h2" icon inverted color="grey">
        <Image src="./logo512.png" size="massive" />
        JT Online
        <Header.Subheader>
          Con Mercado Pago, pagá con tarjeta, débito o efectivo. También podés
          pagar en hasta 12 cuotas sin tarjeta con Mercado Crédito.
        </Header.Subheader>
      </Header>
      <div className="home">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default Home;
