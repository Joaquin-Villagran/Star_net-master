import React, { useContext } from "react";
import "./CartShop.css";
import { Button, Modal } from "semantic-ui-react";

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

  return (
    <div className="CartShop_container">
      <h1>Tus Productos</h1>
      {cart.map((item, index) => (
        <div key={index} className="CartShop_Card">
          <div className="CartShop_head">
            <img className="CS_img" src={`${item.img}`} alt={item.title} />
            <p className="CS_title">{item.title}</p>
          </div>
          <div className="CS_body">
            <p className="CS_quantity">
              Cantidad: <b>{item.quantity}</b>
            </p>
            <p className="CS_price">$:{item.price * item.quantity}</p>
          </div>

          <div className="CS_buttons">
            <button onClick={() => add(item)}>sumar</button>
            <button onClick={() => onRemove(item)}>
              {item.quantity > 1 ? "restar" : "borrar"}
            </button>
          </div>
        </div>
      ))}
      <div>
        <Modal
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={<Button positive>Comprar</Button>}
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
          negative
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
