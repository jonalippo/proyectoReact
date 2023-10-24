import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/product/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/category/:category" element={<ItemListContainer />} />
      </Routes>
     {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;


//Routes: envuelve todas las rutas
//Route: es cada una de las rutas
//Un solo / va directo a home. Exact porq va leer toda la ruta, no solo el "/"