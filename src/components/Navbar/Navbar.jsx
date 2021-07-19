import React, { useContext } from "react";
import "./Navbar.css";
import { Menu, Segment } from "semantic-ui-react";

// Traemos las rutas
import { Link } from "react-router-dom";
// Import context
import { CartContext } from "../../Context/Context";

export default function Navbar() {
  const [cart] = useContext(CartContext);

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/be72bf14ac423ee338967263320dbd30/2c2698b1-9008-488d-8b43-9516bdaf7660_rwc_0x0x1080x1042x4096.png?h=5d8c3f7ce0c1b2ad4a045f6b9082fc06" />
        </Menu.Item>
        <Menu.Item name="inicio" className="links">
          <Link className="links" to="/">
            inicio
          </Link>
        </Menu.Item>
        <Menu.Item name="inicio" className="links">
          <Link className="links" to="/Categories">
            categoria
          </Link>
        </Menu.Item>
        <Menu.Item name="inicio" className="links">
          <Link className="links" to="/ShoppingCart">
            Productos {cart.length}
          </Link>
        </Menu.Item>
      </Menu>
    </Segment>
  );
}
