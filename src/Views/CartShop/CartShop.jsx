import React, { useContext } from "react";
import "./CartShop.css";
import { Button, Modal, Item, Label } from "semantic-ui-react";

import { CartContext } from "../../Context/Context";
function CartShop() {
  // traemos el contexto
  const [cart, setCart] = useContext(CartContext);

  // declaramos dos funciones para poder manejar la cantidad de cada item

  const add = (product) => {
    const exist = cart.find((x) => x.id === product.id); // exist hace referencia a un item que coindida con la condicion de id
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
      // {/* si el item coincide le vajamos la cantidad en 1 */}
    }
  };
  // CAMBIAR LOS .TITLE POR .ID PRIEMRO CAMBIAR EN FIREBASE
  const onRemove = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };
  const [open, setOpen] = React.useState(false);
  const [abrir, setAbierto] = React.useState(false);

  return (
    <div className="containerf">
      <h1 className="titulo">TUS PRODUCTOS</h1>
      {cart.map((item, index) => (
        <div>
          <Item.Group key={index} divided>
            <Item>
              <Item.Image src={`${item.img}`} alt={item.title} />
              <Item.Content>
                <br></br>
                <Item.Header as="a">{item.title}</Item.Header>
                <Item.Meta>
                  <span className="cinema">
                    <strong>Cantidad : {item.quantity}</strong>
                  </span>
                </Item.Meta>
                <Item.Description>
                  <Modal
                    centered={false}
                    open={abrir}
                    onClose={() => setAbierto(false)}
                    onOpen={() => setAbierto(true)}
                    trigger={<Button color="blue">Detalles</Button>}
                  >
                    <Modal.Header>DETALLES</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>{item.description}</Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button onClick={() => setAbierto(false)}>OK</Button>
                    </Modal.Actions>
                  </Modal>
                  <br />
                  <br />
                  <Button
                    onClick={() => add(item)}
                    basic
                    inverted
                    color="green"
                  >
                    +
                  </Button>
                  <Label tag as='a'>{"$:" + item.price * item.quantity}</Label>
                  <Button
                    onClick={() => onRemove(item)}
                    basic
                    inverted
                    color="red"
                  >
                    -
                  </Button>{" "}
                </Item.Description>
                <Item.Extra></Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <hr />
        </div>
      ))}
      <div className="botonesCompras">
        <Modal
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={
            <Button circular compact inverted color="green">
              Comprar
            </Button>
          }
        >
          <Modal.Header>Productos Confirmados ✔️ </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              Muchas Gracias por Comprar en JT. ¡Felicidades!
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Modal.Actions>
        </Modal>
        <Button
          inverted
          color="red"
          circular
          compact
          onClick={() => {
            setCart([]);
          }}
        >
          Limpiar
        </Button>
      </div>
    </div>
  );
}

export default CartShop;
