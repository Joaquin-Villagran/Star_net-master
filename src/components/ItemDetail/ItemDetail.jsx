// hacemos la destructuracion de la data proveniente de ItemDetailContainer

import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { Button, Image, Modal } from "semantic-ui-react";

// data base
// import database from '../../DATA/data.json'
// components
import { CartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function ItemDetail({ param, detail }) {
  const [visible, setVisible] = useState(true);

  const [cart, setCart] = useContext(CartContext);

  function addCarrito() {
    setVisible(false);
    onAdd(param);
  }

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
  const [open, setOpen] = useState(false);

  return (
    <div className="row">
      <div className="detail_card">
        <div className="detail_img">
          <img src={`${param.img}`} alt={`${param.title}`} />
        </div>
        <div className="detail_content">
          <h2>{param.title}</h2>
          <h2 className="detail_price">${param.price}</h2>
          <div className="detail_buttons">
            {visible ? (
              <>
                <Button
                  positive
                  className="button-1"
                  onClick={() => addCarrito()}
                >
                  Agregar al carrito
                </Button>

                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  trigger={<Button primary>Detalles</Button>}
                >
                  <Modal.Header>Detalles</Modal.Header>
                  <Modal.Content image>
                    <Image size="large" src={param.img} wrapped />
                    <Modal.Description>
                      <p className="deta">{param.description}</p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => setOpen(false)} positive>
                      Ok
                    </Button>
                  </Modal.Actions>
                </Modal>
                <Link to="/Categories">
                  <Button negative className="button-2">
                    Volver atras
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/Categories">
                  <Button
                    positive
                    className="button-3"
                    onClick={() => setVisible(true)}
                  >
                    Comprar mas
                  </Button>
                </Link>
                <Link to="/ShoppingCart">
                  <Button
                    primary
                    className="button-3"
                    onClick={() => setVisible(true)}
                  >
                   Ir al Carrito
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
