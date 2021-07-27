import "./App.css";
// REACT
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// DEPENDENCIAS
import "semantic-ui-css/semantic.min.css";
// Porvider para CONTEXT
import { CartProvider } from "./Context/Context";
// VISTAS
import Home from "./Views/Home/Home";
import Categories from "./Views/Categories/Categories";
import CartShop from "./Views/CartShop/CartShop";
// COMPONENTES
import Navbar from "./components/Navbar/Navbar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import ProductCategoryContainer from "./components/ProductCategoryContainer/ProductCategoryContainer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}>
              <Home />
            </Route>
            <Route path="/Categories">
              {" "}
              {/* Primero declaramos todas las rutas sencillas*/}
              <Categories />
            </Route>
            <Route path="/ShoppingCart">
              <CartShop />
            </Route>
            {/* ruta para los items filtrando por categoria */}
            <Route path="/category/:category">
              <ProductCategoryContainer />
            </Route>

            {/* declaramos la ruta dinamica para los item en detalle individualmente */}
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </div>
        {/* aca declaramos el footer */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
