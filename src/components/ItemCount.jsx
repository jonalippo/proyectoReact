import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const suma = () => {
    quantity < 10 ? setQuantity(quantity + 1) : alert("No hay stock");
  };
  const resta = () => {
    quantity > 0 ? setQuantity(quantity - 1) : alert("Minimo alcanzado");
  };

  const addItemAux = () => {
    addItem(producto, quantity);
    alert("Producto agregado al carrito");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="1rem"
      >
        <Button onClick={resta} fontWeight="800">
          -
        </Button>
        <Button background="#422c02" color="white" height="30px">
          {quantity}
        </Button>
        <Button onClick={suma} fontWeight="800">
          +
        </Button>

        <Button
          onClick={addItemAux}
          className="buttonDetalle"
          width="160px"
          height="30px"
        >
          Agregar al carrito
        </Button>
      </Box>
    </>
  );
};
export default ItemCount;
