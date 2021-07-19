// hacemos la destructuracion de la data proveniente de ItemDetailContainer

import React, { useState, useContext } from "react";
import "./ProductCategoryList.css";
import { Dimmer, Loader } from "semantic-ui-react";

// data base
// import database from '../../DATA/data.json'
// components
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";
// import Spiner from '../Spiner/Spiner';

export default function ItemDetail({ param, spiner }) {
  const [loading, setLoading] = useState(spiner);
  const [visible, setVisible] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  function addCarrito() {
    // setCart([...cart, myItem]);
    setVisible(false);
    onAdd(param);
  }
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const onAdd = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      {loading ? (
        // <Spiner />
        <Dimmer active>
          <Loader content="Loading" />
        </Dimmer>
      ) : (
        // <h1>HOLAAA</h1>
        <>
          <div className="product_list_card">
            <div className="product_img">
              <img src={`${param.img}`} alt={`${param.title}`} />
            </div>
            <div className="product_content">
              <h2>{param.title}</h2>
              <h2 className="detail_price">
                ${param.price} <small>.99</small>{" "}
              </h2>
              {/* <h2 className='detalles' onClick={()=>{detail(param.description)}}>detalles</h2> */}
              <div className="detail_buttons">
                {visible ? (
                  <>
                    <button className="button-1" onClick={() => addCarrito()}>
                      Agregar al carrito
                    </button>
                    <Link to="/Categories">
                      <button className="button-2">Volver atras</button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/Categories">
                      <button
                        className="button-3"
                        onClick={() => setVisible(true)}
                      >
                        Seguir Viendo
                      </button>
                    </Link>
                    <Link to="/ShoppingCart">
                      <button className="button-4">Comprar ahora</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
