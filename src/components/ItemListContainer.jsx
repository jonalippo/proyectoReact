import ItemList from './ItemList';
import { Box } from '@chakra-ui/react';
import "./Styles.css";
import { useParams } from 'react-router-dom';

const ItemListContainer = ()  => {
  
const {category} =useParams()
     const productos = [
      {
        id: "1",
        name: "Café en grano",
        description: "Descripcion del producto",
        price: 1000,
        stock: 3,
        category: "cafeGranos",
        quantity:0
      },
      {
        id: "2",
        name: "Café molido",
        description: "Descripcion del producto",
        price: 500,
        stock: 4,
        category: "cafeMolido",
        quantity:0
      },
      {
        id: "3",
        name: "Café molido",
        description: "Descripcion del producto",
        price: 400,
        stock: 4,
        category: "cafeMolido",
        quantity:0
      },
      {
        id: "4",
        name: "Café en cápsulas",
        description: "Descripcion del producto",
        price: 800,
        stock: 6,
        category: "cafeCapsulas",
        quantity:0
      },
      {
        id: "5",
        name: "Café en cápsulas",
        description: "Descripcion del producto",
        price:850,
        stock: 6,
        category: "cafeCapsulas",
        quantity:0
      },
      {
        id: "6",
        name: "Té en hebras",
        description: "Descripcion del producto",
        price: 700,
        stock: 7,
        category: "infusionesHebras",
        quantity:0
      },
      {
        id: "7",
        name: "Té en hebras",
        description: "Descripcion del producto",
        price: 800,
        stock: 3,
        category: "infusionesHebras",
        quantity:0
      },
      {
        id: "8",
        name: "Té en saquitos",
        description: "Descripcion del producto",
        price: 500,
        stock: 7,
        category: "infusionesSaquitos",
        quantity:0
      },
      {
        id: "9",
        name: "Té en saquitos",
        description: "Descripcion del producto",
        price: 550,
        stock: 3,
        category: "infusionesSaquitos",
        quantity:0
      },
      {
        id: "10",
        name: "Maquinas de cápsulas",
        description: "Descripcion del producto",
        price: 10000,
        stock: 4,
        category:"maquinas",
        quantity:0
      },
      {
        id: "11",
        name: "Espresso",
        description: "Descripcion del producto",
        price: 6180,
        stock: 15,
        category:"maquinas",
        quantity:0
      },
      {
        id: "12",
        name: "Cafeteras italianas",
        description: "Descripcion del producto",
        price: 5000,
        stock: 7,
        category:"maquinas",
        quantity:0
      },
      {
        id: "13",
        name: "Molinos",
        description: "Descripcion del producto",
        price: 2000,
        stock: 7,
        category:"maquinas",
        quantity:0
      },
      {
          id: "14",
          name: "Con filtro",
          description: "Descripcion del producto",
          price: 1200,
          stock: 7,
          category:"maquinas",
          quantity:0
        },
      ];

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No se encontraron productos");
    }
  });

  mostrarProductos
    .then((resultado) => {
      resultado
    })
    .catch((error) => {
      error
    });

    const filteredProduct = productos.filter((producto) => producto.category === category);

    return(
        <>
        <Box className= "boxItemListContainer">
          {category ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
        </Box>
            
        </>
    )
 }
  export default ItemListContainer;