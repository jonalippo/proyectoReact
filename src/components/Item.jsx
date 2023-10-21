import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Styles.css";

const Item = ({ name, id}) => {
  return (
    <>
      <Card className="styledCard" boxShadow='dark-lg'>
        <CardBody padding="0">
          <Stack mt="6" spacing="3">
            <Box className="containerImg">Img</Box>
            <Heading size="md" textAlign="center">{name}</Heading>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" background='#422c02' color='white'>
              <Link to={`/product/${id}`}>
              Ver detalle
              </Link>
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Item;
