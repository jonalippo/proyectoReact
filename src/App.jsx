import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/home" element={<Home />} />
            <Route
              exact
              path="/product/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
             <Route exact path='/cart' element={<Cart />} />
             <Route exact path='/form' element={<Form />} />
          </Routes>
          <Footer />
        </CartContextProvider>        
      </BrowserRouter>
    </>
  );
};

export default App;

//Routes: envuelve todas las rutas
//Route: es cada una de las rutas
//Un solo / va directo a home. Exact porq va leer toda la ruta, no solo el "/"
