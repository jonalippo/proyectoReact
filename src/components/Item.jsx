import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Styles.css";

const Item = ({ imagen, name, id }) => {
  return (
    <>
      <Card className="styledCard" boxShadow="dark-lg">
        <CardBody padding="0">
          <Stack mt="6" spacing="3">
            <Image className="containerImg" src={imagen}></Image>
            <Heading size="md" textAlign="center" color="white">
              {name}
            </Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" className="buttonDetalle">
              <Link to={`/product/${id}`}>Ver detalle</Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
