//Tiene un hijo llamado ItemDetail
//El ItemDetail tiene: img, nombre del producto, descripcion, precio y el componente contador con
//el boton de sumar, cantidad y restar

import React from "react";
import ItemDetail from "./ItemDetail";
import { Box } from "@chakra-ui/react";
import "./Styles.css";

const ItemDetailContainer = () => {

    const productos = [
        {
      id: "1",
      name: "Café en grano",
      description: "Descripcion del producto",
      price: "$100",
      stock: 3,
      category: "Café",
    },
    {
      id: "2",
      name: "Café molido",
      description: "Descripcion del producto",
      price: "$800",
      stock: 4,
      category: "Café",
    },
    {
      id: "3",
      name: "Café en cápsulas",
      description: "Descripcion del producto",
      price: "$600",
      stock: 6,
      category: "Café",
    },
    {
      id: "4",
      name: "Té en hebras",
      description: "Descripcion del producto",
      price: "$500",
      stock: 7,
      category: "Infusiones",
    },
    {
      id: "5",
      name: "Té en saquitos",
      description: "Descripcion del producto",
      price: "$150",
      stock: 3,
      category: "Infusiones",
    },
    {
      id: "6",
      name: "Maquinas de cápsulas",
      description: "Descripcion del producto",
      price: "$1000",
      stock: 4,
      category:"Maquinas",
    },
    {
      id: "7",
      name: "Espresso",
      description: "Descripcion del producto",
      price: "$6180",
      stock: 15,
      category:"Maquinas",
    },
    {
      id: "8",
      name: "Cafeteras italianas",
      description: "Descripcion del producto",
      price: "$5000",
      stock: 7,
      category:"Maquinas",
    },
    {
      id: "9",
      name: "Molinos",
      description: "Descripcion del producto",
      price: "$2000",
      stock: 7,
      category:"Maquinas",
    },
    {
        id: "10",
        name: "Con filtro",
        description: "Descripcion del producto",
        price: "$2000",
        stock: 7,
        category:"Maquinas",
      },
      ];
    
      //New promesa para mostrar los productos en 3 segundos por consola
      const mostrarProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
          setTimeout(() => {
            resolve(productos);
          }, 2000);
        } else {
          reject("No se encontrsaron productos");
        }
      });
    
      mostrarProductos
        .then((resultado) => {
          console.log(resultado);
        })
        .catch((error) => {
          console.log(error);
        });
    
    return (
        <>
        <Box className= "boxItemDetailContainer">
            <ItemDetail productos = {productos}/>
        </Box>
        </>
    )
}

export default ItemDetailContainer;