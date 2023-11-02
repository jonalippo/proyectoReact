import { Box, Button,} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const {addItem} = useContext(CartContext)

    useEffect(() => {
        
    }, [])

    const suma = () =>{
        contador < 10 ? setContador(contador + 1) : alert("No hay stock") 
    }
    const resta = () =>{
        contador > 0 ? setContador(contador - 1) : alert("Minimo alcanzado") 
    }


    // const add = () => {
    //     alert(`Cantidad de productos agregados: ${contador}`)
    // }

    return(
        <>
        <Box display="flex" alignItems="center" justifyContent="space-between" gap="1rem">
            <Button onClick={suma} fontWeight="800">+</Button>
            <Button background='#422c02' color="white" height="30px">{contador}</Button>
            <Button onClick={resta} fontWeight="800">-</Button>
            <Button onClick={addItem} width="140px" height="30px" background='#422c02' color='white'>Agregar al carrito</Button>       
        </Box>
        </>
    )
 }
  export default ItemCount;