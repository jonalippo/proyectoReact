import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider> 
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
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
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/form" element={<Form />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;

