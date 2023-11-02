import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    Card,
    CardBody,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Box
  } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import "./Styles.css";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filteredProduct = productos.filter((producto) => producto.id === id);

  const [quantityAdded, setQuantityAdded] = useState(0)

  const handleOnAdd = (quantity) =>{
    setQuantityAdded(quantity)
}


  return (
    <>
      {filteredProduct.map((p) => {
        return (
          <Card className="styledCardDetail" boxShadow='dark-lg'>
            <CardBody>
              <Stack mt="2" spacing="1" textAlign="center">
              <Box className="containerImgDetail">Imagen</Box>
                <Heading size="md">{p.name}</Heading>
              </Stack>
            </CardBody>
            <Text fontSize="18px">{p.description}</Text>
            <Text fontSize="22px" fontWeight="700" color="brown" padding="1em">{p.price}</Text>
            <Divider />
            <CardFooter>
              <ButtonGroup className="styledButtonGroup">
                {
                  quantityAdded > 0 ?(
                    <Link to='/cart' >Terminar compra</Link>
                  ) : (
                    <ItemCount initial={1} onAdd={handleOnAdd}/>
                  )
                }
                
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </>  
    )}

export default ItemDetail;
