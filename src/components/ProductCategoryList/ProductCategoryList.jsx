// hacemos la destructuracion de la data proveniente de ItemDetailContainer

import React, { useState, useContext } from "react";
import "./ProductCategoryList.css";
import { Button, Dimmer, Loader, Modal, Image } from "semantic-ui-react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {loading ? (
        // <Spiner />
        <Dimmer active>
          <Loader content="Cargando Pagina" />
        </Dimmer>
      ) : (
        <>

          <div className="productCategory">
            <div className="tarjeta">
              <div>
                <img
                  className="detail_img"
                  src={`${param.img}`}
                  alt={`${param.title}`}
                />
              </div>
              <div>
                <h2>{param.title}</h2>
                <h2>${param.price}</h2>
                <div>
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
                        <Modal.Content image size="tiny">
                          <Image size="tiny" src={param.img} wrapped />
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
        </>
      )}
    </>
  );
}
